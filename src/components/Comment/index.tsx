import { isMobile } from 'utils/scaleFunctions';
import { CommentContainer } from './styled';

interface IComment {
    comment: string;
    setComment: (comment: string) => void;
}
export function Comment(props: IComment) {
    const { comment, setComment } = props;

    return (
        <CommentContainer
            multiline
            value={comment}
            onChangeText={setComment}
            maxLength={isMobile ? 60 : 150}
        />
    );
}
