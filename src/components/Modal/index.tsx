import { ModalContainer } from './styled';

interface IModal {
    children: JSX.Element;
}
export const Modal = (props: IModal) => {
    const { children } = props;
    return <ModalContainer>{children}</ModalContainer>;
};
