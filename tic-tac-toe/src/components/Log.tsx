import * as React from 'react';
import { BoardState } from './GameState';
import './Log.css';

type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};
export function Log(props: LogProps) {
  return (
    <ol>
      {props.history.map((_, index) => {
        return (
          <li key={index}>
            <button className="button" onClick={() => props.jumpTo(index)}>
              Go to {index === 0 ? 'start' : `move #${index}`}
            </button>
          </li>
        );
      })}
    </ol>
  );
}