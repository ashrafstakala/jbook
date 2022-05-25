import './resizable.css';
const { ResizableBox } = require('react-resizable');

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
  children: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return (
    <ResizableBox width={Infinity} height={300} resizeHandles={['s']}>
      {children}
    </ResizableBox>
  );
};

export default Resizable;
