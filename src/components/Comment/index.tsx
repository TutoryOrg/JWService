import { isMobile } from 'utils/scaleFunctions';
import { CommentContainer } from './styled';

interface IComment {
    comment: string;
    onChangeComment: (comment: string) => void;
}
export function Comment({ comment, onChangeComment }: IComment) {
    return (
        <CommentContainer
            multiline
            value={comment}
            onChangeText={onChangeComment}
            maxLength={isMobile ? 60 : 150}
        />
    );
}
