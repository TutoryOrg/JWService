import { useRef } from 'react';
import { Direction } from 'utils/constants';
import { useSelector } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native';
import { type RootState, useAppDispatch } from 'store/redux';
import { useEffect, useCallback, useState } from 'react';
import { isMobile, isSameDay, windowHeight } from 'utils/scaleFunctions';
import { Arrow, DateHeader, Habit, ImagePicker } from 'components';
import { type IHabit, type IStoreHabits, setSavedHabits } from 'store/redux/habits';
import { ButtonToTop, ContentContainer, ImageContainer, TodayContainer, TopLabel } from './styled';
import _ from 'lodash';

export const emptyHabit: IHabit = {
	id: '',
	label: '',
	isDone: false,
};

interface IContent {
	day: IStoreHabits;
	editable: boolean;
	addHabit: (date: string, habits: IHabit[], hb: IHabit) => void;
	removeHabit: (date: string, habits: IHabit[], hb: IHabit) => void;
	editHabit: (date: string, habits: IHabit[], hb: IHabit) => void;
	addImage: (date: string, img: string) => void;
	addDescription: (date: string, desc: string) => void;
}

const Content = (props: IContent) => {
	const { day, editable, addHabit, removeHabit, editHabit, addDescription, addImage } = props;
	const { date, habits, description, image, progress } = day;

	return (
		<ContentContainer>
			<DateHeader date={new Date(date as string)} progress={progress} />

			{habits.map((habit, index) => (
				<Habit
					key={index}
					habit={habit}
					editable={editable}
					addHabit={(h) => addHabit(date as string, habits, h)}
					editHabit={(h) => editHabit(date as string, habits, h)}
					removeHabit={(h) => removeHabit(date as string, habits, h)}
				/>
			))}

			{habits.length < 5 && (
				<Habit
					habit={emptyHabit}
					editable={editable}
					addHabit={(h) => addHabit(date as string, habits, h)}
					editHabit={(h) => editHabit(date as string, habits, h)}
					removeHabit={(h) => removeHabit(date as string, habits, h)}
				/>
			)}

			<ImageContainer>
				<ImagePicker
					image={image}
					desc={description}
					editable={editable}
					onAddDesc={(d) => addDescription(date as string, d)}
					onChangeImage={(i) => addImage(date as string, i)}
				/>
			</ImageContainer>
		</ContentContainer>
	);
};

export const Today = (props: { index: number; setIndex: (i: number) => void }) => {
	const { index, setIndex } = props;
	const ref = useRef<FlatList>(null);
	const dispatch = useAppDispatch();
	const todayDate = new Date();
	const savedHabits = useSelector((state: RootState) => state.habits.savedHabits);

	const [savedHabitsToday, setHabitsToday] = useState<IStoreHabits[]>(
		_.isEmpty(savedHabits)
			? [
					{
						date: todayDate.toString(),
						image: '',
						habits: [],
						description: '',
						progress: 0,
					},
				]
			: isSameDay(new Date(savedHabits[0].date as string), todayDate)
				? savedHabits
				: [
						{
							date: todayDate.toString(),
							image: '',
							habits: savedHabits[0].habits.map((h) => ({
								...h,
								isDone: false,
							})),
							description: '',
							progress: 0,
						},
						...savedHabits,
					],
	);

	const saveDataAsync = useCallback(
		_.debounce((d: IStoreHabits[]) => {
			dispatch(setSavedHabits(d));
		}, 500),
		[],
	);

	useEffect(() => {
		const notEmptyToday = savedHabitsToday[0].habits.find((h) => h.isDone) || !_.isEmpty(savedHabitsToday[0].image);

		if (notEmptyToday) saveDataAsync(savedHabitsToday);
	}, [savedHabitsToday]);

	const isValidIndex = (i: number) => i >= 0 && i < savedHabitsToday.length;
	const scrollToIndex = (index: number) => {
		if (!(index >= 0 && index < savedHabitsToday.length)) return;
		setIndex(index);
		ref?.current?.scrollToIndex({
			index: index,
			animated: true,
			viewPosition: 0,
		});
	};

	const calculateProgress = (todayHabits: IHabit[]) => {
		if (todayHabits.length === 0) return 0;
		const numHabits = todayHabits.length;
		const numHabitsDone = todayHabits.filter((h) => h.isDone === true).length;
		const progress = (numHabitsDone / numHabits) * 100;
		return progress;
	};

	const addHabit = (date: string, habits: IHabit[], newHabit: IHabit) => {
		const hb = [...habits, newHabit];
		setHabitsToday((prev: IStoreHabits[]) =>
			prev.map((h) => (h.date === date ? { ...h, habits: hb, progress: calculateProgress(hb) } : h)),
		);
	};

	const removeHabit = (date: string, habits: IHabit[], delHabit: IHabit) => {
		const hb = habits.filter(({ id }) => id !== delHabit.id);
		setHabitsToday((prev: IStoreHabits[]) =>
			prev.map((h) => (h.date === date ? { ...h, habits: hb, progress: calculateProgress(hb) } : h)),
		);
	};

	const editHabit = (date: string, habits: IHabit[], edHabit: IHabit) => {
		const hb = habits.map((h) => (h.id === edHabit.id ? edHabit : h));
		setHabitsToday((prev: IStoreHabits[]) =>
			prev.map((h) => (h.date === date ? { ...h, habits: hb, progress: calculateProgress(hb) } : h)),
		);
	};

	const addImage = (date: string, newImage: string) => {
		setHabitsToday((prev: IStoreHabits[]) => prev.map((h) => (h.date === date ? { ...h, image: newImage } : h)));
	};

	const addDescription = (date: string, desc: string) => {
		setHabitsToday((prev: IStoreHabits[]) => prev.map((h) => (h.date === date ? { ...h, description: desc } : h)));
	};

	const renderItem = ({ item, index }: { item: IStoreHabits; index: number }) => {
		return (
			<Content
				key={index}
				day={item}
				editable={isSameDay(todayDate, new Date(item.date))}
				addHabit={addHabit}
				removeHabit={removeHabit}
				editHabit={editHabit}
				addImage={addImage}
				addDescription={addDescription}
			/>
		);
	};

	return (
		<TodayContainer>
			{!_.isEqual(index, 0) && <ButtonToTop onPress={() => scrollToIndex(0)} children={<TopLabel>{'Top'}</TopLabel>} />}

			<FlatList
				ref={ref}
				pagingEnabled={true}
				maxToRenderPerBatch={5}
				data={savedHabitsToday}
				renderItem={renderItem}
				initialScrollIndex={index}
				keyExtractor={(item) => item.date}
				showsHorizontalScrollIndicator={false}
				getItemLayout={(data, index) => ({
					length: data?.length as number,
					offset: windowHeight * index,
					index,
				})}
				onScroll={(e: any) => {
					const index = Math.round(e.nativeEvent.contentOffset.y / windowHeight);
					setIndex(index);
				}}
			/>

			{!isMobile && isValidIndex(index - 1) && (
				<TouchableOpacity
					style={{
						position: 'absolute',
						right: 0,
						top: 170,
						width: 50,
						height: 50,
						backgroundColor: 'gray',
						borderRadius: 90,
						alignItems: 'center',
						justifyContent: 'center',
					}}
					disabled={!isValidIndex(index - 1)}
					onPress={() => scrollToIndex(index - 1)}
					children={<Arrow direction={Direction.UP} />}
				/>
			)}

			{!isMobile && isValidIndex(index + 1) && (
				<TouchableOpacity
					style={{
						position: 'absolute',
						right: 0,
						bottom: 150,
						width: 50,
						height: 50,
						backgroundColor: 'gray',
						borderRadius: 90,
						alignItems: 'center',
						justifyContent: 'center',
					}}
					disabled={!isValidIndex(index + 1)}
					onPress={() => scrollToIndex(index + 1)}
					children={<Arrow direction={Direction.DOWN} />}
				/>
			)}
		</TodayContainer>
	);
};
