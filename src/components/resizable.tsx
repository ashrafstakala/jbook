import './resizable.css';
const { ResizableBox } = require('react-resizable');

interface ResizableProps2 {
  direction: 'horizontal' | 'vertical';
  children: React.ReactNode;
}

const Resizable: React.FC<ResizableProps2> = ({ direction, children }) => {
  return (
    <ResizableBox width={300} height={300} resizeHandles={['s']}>
      {children}
    </ResizableBox>
  );
};

export default Resizable;
