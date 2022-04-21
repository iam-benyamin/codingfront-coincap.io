import { NotFoundStyle } from './style';

export function NotFound() {
    document.title = "404: This page could not be found"
    return (
        <NotFoundStyle>
            <h2 className="number">404</h2>
            <h2 className="discription">This page could not be found.</h2>
        </NotFoundStyle>
    );
};