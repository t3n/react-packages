import React, { useState } from 'react';

import {
  Alert,
  AlertText,
  Box,
  Button,
  Input,
  Text,
  useToast,
} from '@t3n/components';
import { AlertStatus } from '@t3n/components/src/Alert';
import { NotifyOptions } from '@t3n/components/src/Toast';

import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  component: Alert,
  title: 'Components/Content/Alert',
  decorators: [storyContainerContentDecorator],
};

export const defaultStory = () => (
  <>
    <Alert status="success" m={2}>
      <AlertText>Dies ist eine Erfolgsmeldung</AlertText>
    </Alert>
    <Alert status="notice" m={2}>
      <AlertText>Merke dir dies und das!</AlertText>
    </Alert>
    <Alert status="warning" m={2}>
      <AlertText>Dies ist eine Warnung!</AlertText>
    </Alert>
    <Alert status="error" m={2}>
      <AlertText>So geht das nicht. Error!</AlertText>
    </Alert>
  </>
);

const positions = [
  { position: 'top', label: 'Oben' },
  { position: 'top-right', label: 'Oben rechts' },
  { position: 'bottom-right', label: 'Unten rechts' },
  { position: 'bottom', label: 'Unten' },
  { position: 'bottom-left', label: 'Unten links' },
  { position: 'top-left', label: 'Oben links' },
];

export const ToastStory = () => {
  const [status, setStatus] = useState('success');
  const [text, setText] = useState('Deine Registrierung war erfolgreich');
  const [notify] = useToast();

  return (
    <>
      <Text>Konfiguriere den Toast;</Text>
      <Box display="flex" alignItems="center">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ marginRight: '2rem' }}
        >
          <option value="warning">Warnung</option>
          <option value="notice">Info</option>
          <option value="success">Erfolg</option>
          <option value="error">Error</option>
        </select>
        <Input defaultValue={text} onChange={(e) => setText(e.target.value)} />
      </Box>

      <Text>Wo soll der Toast angezeigt werden?</Text>
      {positions.map((el) => (
        <Button
          key={el.position}
          m={2}
          onClick={() => {
            notify({
              text,
              status: status as AlertStatus,
              isClosable: true,
              duration: 9000,
              position: el.position as NotifyOptions['position'],
            });
          }}
        >
          {el.label}
        </Button>
      ))}
    </>
  );
};

ToastStory.storyName = 'Als Toast';
