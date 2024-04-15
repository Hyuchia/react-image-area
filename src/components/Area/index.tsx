import { CSSProperties, FunctionComponent } from 'react';
import { IAreaProps } from './types';
import Handles from './Handles';

const styles: CSSProperties = {
  position: 'absolute',
  border: '1px dashed rgba(0,0,0,0.5)',
  outline: '1px dashed rgba(255,255,255,0.5)',
  cursor: 'move',
  boxSizing: 'border-box',
  touchAction: 'none',
};

export const Area: FunctionComponent<IAreaProps> = ({
  area,
  onCropStart,
  showHandles,
  globalAreaStyle,
  customAreaRenderer,
  areaNumber,
  removeArea,
}) => {
  const localStyle = {
    top: `${area.y}${area.unit}`,
    left: `${area.x}${area.unit}`,
    width: `${area.width}${area.unit}`,
    height: `${area.height}${area.unit}`
  };

  const style = {
    ...styles,
    ...localStyle,
    ...globalAreaStyle,
    ...area.areaStyle
  };

  return (
    <div
      style={style}
      onPointerDown={onCropStart}
      data-wrapper="wrapper"
    >
      {customAreaRenderer && customAreaRenderer({ ...area, areaNumber, removeArea })}
      {showHandles && <Handles />}
    </div>
  );
};
