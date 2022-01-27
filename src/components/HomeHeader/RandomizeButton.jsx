import React from 'react';
import {Button} from 'antd';
import {RedoOutlined} from '@ant-design/icons';
import "./RandomizeButton.css";
const RandomizeButton = ({onClick}) => {
  return (
    <div style={{marginTop: 8}}>
      <Button
      className="btn"
        type="primary"
        style={{
          width: 130,
          background: '#0D1929',
          borderColor: '#0D1929',
          fontWeight: 'bold',
        }}
        icon={<RedoOutlined />}
        onClick={onClick}
      >
        Randomize
      </Button>
    </div>
  );
};

export default RandomizeButton;
