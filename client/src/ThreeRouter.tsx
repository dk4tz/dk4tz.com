import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { History, createBrowserHistory } from 'history';

export const history = createBrowserHistory();

interface ThreeRouterProps {
  history: History;
  children: React.ReactNode;
}

const ThreeRouter = ({ history, ...props }: ThreeRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return <Router {...props} location={state.location} navigationType={state.action} navigator={history} />;
};

export default ThreeRouter;
