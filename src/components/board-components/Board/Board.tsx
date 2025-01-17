import React from 'react';

import styles from './Board.module.scss';

import Row from '@/components/board-components/Row/Row';
import { useGame } from '@/components/Game/GameProvider';

interface BoardProps {}

const Board: React.FC<BoardProps> = () => {
  const { board, handleBoardKeyPress } = useGame();

  const divRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (divRef.current) {
      if ('focus' in divRef.current) {
        divRef.current.focus();
      }
    }
  }, [board]);

  return (
    <div
      className={styles['board']}
      tabIndex={0}
      ref={divRef}
      onKeyDown={(event) => {
        handleBoardKeyPress(event.key);
      }}
    >
      {board.map((row, rowIndex) => (
        <Row key={rowIndex} rowIndex={rowIndex} rowData={row} />
      ))}
    </div>
  );
};

export default Board;
