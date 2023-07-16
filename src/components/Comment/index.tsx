import { CommentContainer } from './styled';

export function Comment(props: { multiline: boolean; maxLength: number }) {
    return <CommentContainer {...props} />;
}
