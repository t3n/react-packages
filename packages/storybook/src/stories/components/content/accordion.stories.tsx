import React, { useState } from 'react';
import {
  Accordion,
  Section,
  Button,
  Image,
  Text,
  Grid,
  GridItem
} from '@t3n/components';

export default {
  title: 'Components|Content/Accordion',
  component: Accordion
};

export const defaultStory = () => {
  return (
    <Section variant="secondary">
      <Accordion title="Wie finde ich andere digitale Pioniere?">
        Dafür gibt es verschiedene Möglichkeiten. Über die Suche im Pioneers
        Network findest du alle Nutzer, die ihr Profil zu einem bestimmten Grad
        ausgefüllt haben. Die Suche wird in den kommenden Entwicklungen stetig
        ausgebaut und optimiert. Außerdem gibt es verschiedene, redaktionell
        kuratierte Listen, in denen du digitale Pioniere aus den jeweiligen
        Fachgebieten entdecken kannst. Zusätzlich arbeiten wir an weiteren
        Features, damit du auch noch über andere Funktionen mit digitalen
        Pionieren in Berührung kommen kannst.
      </Accordion>
    </Section>
  );
};

defaultStory.story = {
  name: 'Default'
};

export const isOpenStory = () => {
  return (
    <Section variant="secondary">
      <Accordion
        initialOpen
        title="Mein Profil erscheint nicht in der Suche. Warum ist das so?"
      >
        Damit dein Profil in der Suche erscheint, muss es zu einem bestimmten
        Grad ausgefüllt sein. Füll es einfach so gut es geht aus, damit du
        möglichst gut gefunden werden kannst.
      </Accordion>
    </Section>
  );
};

isOpenStory.story = {
  name: 'Initial geöffnet'
};

const MultiAccordions = () => {
  const [open, setOpen] = useState(true);

  return (
    <Section variant="secondary">
      <Button onClick={() => setOpen(!open)} mb={3}>
        {open ? 'Alle schließen' : 'Alle öffnen'}
      </Button>
      <Accordion
        initialOpen={open}
        title="Wie bekomme ich einen grünen Haken und damit ein verifiziertes Profil?"
        mb={1}
      >
        <Text mt={0}>
          Zum Start haben wir redaktionell einige uns bekannte
          Network-Mitglieder verifiziert, wodurch sie einen grünen Haken neben
          ihrem Namen bekommen haben. In Zukunft werden wir die Verifizierung
          auf alle Nutzer ausrollen. Wir geben dir Bescheid, sobald es soweit
          ist.
        </Text>
      </Accordion>
      <Accordion
        initialOpen={open}
        title="Warum sollte ich mich beim Pioneers Network anmelden?"
        mb={1}
      >
        <Text mt={0}>
          Im Pioneers Network kannst du andere digitale Pioniere entdecken und
          Einblicke in ihre Arbeit bekommen. Sie geben dir Tipps aus ihrem
          Umgang mit E-Mails, nehmen dich mit in ihren Tagesablauf und du
          erhältst Empfehlungen für Bücher und Podcasts. Der Funktionsumfang
          wird in den kommenden Versionen noch erweitert, sodass es sich lohnt,
          immer wieder reinzuschauen und von Anfang an dabei zu sein!
        </Text>
      </Accordion>
      <Accordion
        initialOpen={open}
        title="Kann ich mich mit anderen Pionieren vernetzen?"
        mb={1}
      >
        <Text mt={0}>
          In der ersten Version des Pioneers Network gibt es diese Funktion
          nicht. Für die Zukunft ist das als Feature vorgesehen.
        </Text>
      </Accordion>
      <Accordion
        initialOpen={open}
        title="Das hier ist eine ganz lange Headline um zu testen wie ein Umbruch aussehen würde."
        mb={1}
      >
        <Grid>
          <GridItem width={[1, 1, 1 / 4]}>
            <Image
              width="200px"
              alt="Bild"
              src="https://images.unsplash.com/photo-1559116674-71fae8b32c95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=663&q=80"
            />
          </GridItem>
          <GridItem width={[1, 1, 3 / 4]}>
            <Text mt={0}>
              Im Pioneers Network kannst du andere digitale Pioniere entdecken
              und Einblicke in ihre Arbeit bekommen. Sie geben dir Tipps aus
              ihrem Umgang mit E-Mails, nehmen dich mit in ihren Tagesablauf und
              du erhältst Empfehlungen für Bücher und Podcasts. Der
              Funktionsumfang wird in den kommenden Versionen noch erweitert,
              sodass es sich lohnt, immer wieder reinzuschauen und von Anfang an
              dabei zu sein!
            </Text>
          </GridItem>
        </Grid>
      </Accordion>
    </Section>
  );
};

export const multipleStory = () => <MultiAccordions />;

multipleStory.story = {
  name: 'Mehrere Akkordeons'
};
