import styled from 'styled-components/native';
import { isMobile } from 'utils/scaleFunctions';
import { fontFamilies, fontSizes } from 'utils/constants';

export const MonthContainer = styled.View<{ progress: number }>`
    align-items: center;
    border-radius: 24px;
    align-content: center;
    justify-content: center;
    width: ${isMobile ? '80' : '100'}px;
    height: ${isMobile ? '80' : '100'}px;
    background-color: ${(props) =>
		props.progress === 0
			? props.theme.pro0
			: props.progress >= 0 && props.progress < 25
				? props.theme.pro1
				: props.progress >= 25 && props.progress < 55
					? props.theme.pro2
					: props.progress >= 55 && props.progress < 75
						? props.theme.pro3
						: props.progress >= 75 && props.progress < 100
							? props.theme.pro4
							: props.progress === 100
								? props.theme.pro5
								: props.theme.txtSelected};
`;

export const MonthLabel = styled.Text<{ progress: number }>`
    color: ${(props) => (props.progress >= 75 ? props.theme.txtSelected : props.theme.txtColor)};
    font-size: ${isMobile ? fontSizes.Xlarge : fontSizes.XXlarge}px;
    font-family: ${fontFamilies.CascadiaMono};
`;
