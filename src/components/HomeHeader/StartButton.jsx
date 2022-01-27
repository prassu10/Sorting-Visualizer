import React from 'react';
import {Button} from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons';

const StartButton = ({onClick}) => {
  return (
    <div style={{marginTop: 8}}>
      <Button
      className = "but"
        type="primary"
        style={{
          width: 130,
          background: 'green',
          borderColor: '#0D1929',
          fontWeight: 'bold',
        }}
        icon={<PlayCircleOutlined />}
        onClick={onClick}
      >
        Start
      </Button>
    </div>
  );
};

export default StartButton;