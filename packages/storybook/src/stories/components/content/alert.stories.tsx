import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  Content,
  Alert,
  AlertText,
  useToast,
  Input,
  Button,
  Box,
  Text
} from '@t3n/components';
import { Position } from 'toasted-notes';
import { AlertStatus } from '@t3n/components/src/Alert';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Content/Alert', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer>
      <Content>{story()} </Content>
    </StoryContainer>
  ))
  .add(
    'Default',
    () => (
      <>
        <Alert status="success" m={2}>
          <AlertText>Dies ist eine Erolgsmeldung</AlertText>
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
    ),
    {
      options: {
        showPanel: true
      }
    }
  )
  .add('Als Toast', () => {
    const [status, setStatus] = useState('success');
    const [text, setText] = useState('Deine Registrierung war erfolgreich');
    const [notify] = useToast();

    const positons = [
      { positon: 'top', label: 'Oben' },
      { positon: 'top-right', label: 'Oben rechts' },
      { positon: 'bottom-right', label: 'Unten rechts' },
      { positon: 'bottom', label: 'Unten' },
      { positon: 'bottom-left', label: 'Unten links' },
      { positon: 'top-left', label: 'Oben links' }
    ];

    return (
      <>
        <Text>Konfiguriere den Toast;</Text>
        <Box display="flex" alignItems="center">
          <select
            onChange={e => setStatus(e.target.value)}
            style={{ marginRight: '2rem' }}
          >
            <option selected={status === 'warning'} value="warning">
              Warnung
            </option>
            <option selected={status === 'notice'} value="notice">
              Info
            </option>
            <option selected={status === 'success'} value="success">
              Erfolg
            </option>
            <option selected={status === 'error'} value="error">
              Error
            </option>
          </select>
          <Input value={text} onChange={e => setText(e.target.value)} />
        </Box>

        <Text>Wo soll der Toast angezeigt werden?</Text>
        {positons.map(el => (
          <Button
            key={el.positon}
            m={2}
            onClick={() =>
              notify({
                text,
                status: status as AlertStatus,
                isClosable: true,
                duration: 9000,
                position: el.positon as keyof typeof Position
              })
            }
          >
            {el.label}
          </Button>
        ))}
      </>
    );
  });
