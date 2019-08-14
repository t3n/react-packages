import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import {
  Card,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  PageLayout,
  Section,
  CardHeader
} from '@t3n/components';

storiesOf('Projekte|t3nPro', module)
  .addDecorator(withKnobs)
  .add('Landingpage', () => (
    <PageLayout showHeader>
      <Section>
        <Grid>
          <GridItem width={[1, 1 / 2]}>
            <Heading as="h1">Das Pro für digitale Pioniere_</Heading>
            <ul>
              <li>Pro Content auf t3n.de</li>
              <li>t3n Magazin als Print- und ePaper-Ausgabe</li>
              <li>Digitales Magazin-Archiv</li>
              <li>Exklusive Member-Events</li>
              <li>Welcome-Package</li>
              <li>Quartalsweise Kündbar</li>
            </ul>
            <Text bold>ab 9,90 EUR/Monat</Text>
            <Button
              color="dark"
              href="/?path=/story/projekte-t3npro-onboarding--login"
            >
              Jetzt starten
            </Button>
          </GridItem>
          <GridItem width={[1, 1 / 2]}>Bild</GridItem>
        </Grid>
      </Section>

      <Section variant="inverse">
        <Grid>
          <GridItem width={[1, 1 / 2, 1 / 4]}>
            <Text bold marginBottom={0}>
              Exklusive Pro-Artikel
            </Text>
            <Text marginTop={0}>Ratgeber, Analysen, Interviews und mehr</Text>
          </GridItem>
          <GridItem width={[1, 1 / 2, 1 / 4]}>
            <Text bold marginBottom={0}>
              t3n Magazin (Print & ePaper)
            </Text>
            <Text marginTop={0}>Vier Ausgaben im Jahr plus Magazin-Archiv</Text>
          </GridItem>
          <GridItem width={[1, 1 / 2, 1 / 4]}>
            <Text bold marginBottom={0}>
              Member-Events
            </Text>
            <Text marginTop={0}>Triff spannende digitale Pioniere</Text>
          </GridItem>
          <GridItem width={[1, 1 / 2, 1 / 4]}>
            <Text bold marginBottom={0}>
              Welcome Package
            </Text>
            <Text marginTop={0}>Pioneers-Shirt, Sticker und mehr</Text>
          </GridItem>
        </Grid>
      </Section>
      <Section variant="secondary">
        <Grid>
          <GridItem width={[1, 1 / 2]}>
            <Card
              width={[4 / 5]}
              href="https://t3n.de/news/7-tipps-newsletter-marketing-1085856/"
            >
              <CardHeader image="https://assets.t3n.sc/news/wp-content/uploads/2016/04/newsletter-management_e-mail-marketing.jpg?auto=format&fit=crop&h=348&ixlib=php-2.3.0&w=620" />
              <Heading styleAs="h2" as="h3" mt={0}>
                9 Tipps für erolgreiches Newsletter-Marketing
              </Heading>
            </Card>
          </GridItem>
          <GridItem width={[1, 1 / 2]}>
            <Heading as="h5" mb={0}>
              Pro-Content auf t3n.de
            </Heading>
            <Heading as="h3" mt={0}>
              Das tägliche Update für dein digitales Leben_
            </Heading>
            <Text>
              Täglich veröffentlichen wir auf t3n.de exklusive Artikel nur für
              t3n-Pro-Member. Nutzwertige Ratgeber, Analysen der neuesten
              Tech-Trends, spannende Interviews: Hier findest du alles, was du
              für dein digitiales Business und Leben brauchst.
            </Text>
          </GridItem>
        </Grid>
      </Section>
      <Section variant="inverse">
        <Grid>
          <GridItem width={[1, 1 / 2]}>
            <Heading as="h4" mb={0}>
              Magazin-Abo und Heftarchiv
            </Heading>
            <Heading as="h3" mt={0}>
              Know-How aus über 50 Ausgaben_
            </Heading>
            <Text>
              Vier mal im Jahr beleuchten wir auf mehr als 200 Seiten alle
              relevanten Themen der Digitalwirtschaft - immer mit einem
              Schwerpunkt, dem wir mit mehreren Artikeln auf den Zahl fühlen.
            </Text>
            <Text>
              Neben dem gedruckten Magazin bekommst du auch das ePaper für iOS &
              Android und Zugriff auf das gesamte Heftarchiv: Hier findest du
              mehr als 50 Ausgaben voll geballtem Wissen, die du im Volltext
              durchsuchen kannst.
            </Text>
          </GridItem>
          <GridItem width={[1, 1 / 2]}>bild</GridItem>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <GridItem width={[1, 1 / 2]}>Bild</GridItem>
          <GridItem width={[1, 1 / 2]}>
            <Heading as="h4" mb={0}>
              Crewlove
            </Heading>
            <Heading as="h3" mt={0}>
              Dein Welcome-Package_
            </Heading>
            <Text>
              Als Member bekommst du ein vollgepacktes Welcome-Package inkl.
              Pioneers-Short, Sticker-Sheet, Pioneers-Pin und weiteren Goodies -
              lass dich überraschen.
            </Text>
            <Button color="light">Ab 8,25 EUR/Monat Pro werden</Button>

            <Text small>
              Bereits Pro-Member?{' '}
              <a href="/?path=/story/projekte-t3npro-onboarding--login">
                Meld dich an
              </a>
            </Text>
          </GridItem>
        </Grid>
      </Section>
      <Section variant="secondary">
        <Heading as="h4" mb={0}>
          Support us
        </Heading>
        <Heading as="h3" mt={0}>
          Die Welt brauch einen positiven Digitaljournalismus_
        </Heading>
        <Text>
          Als t3n-Pro-Member unterstützt du uns dabei, jeden Tag für eine
          positive Zukunft zu arbeiten - und unsere Mission und Werte zu leben
          und weiterzugeben.
        </Text>
        <Grid>
          <GridItem width={[1, 1 / 2]}>bild</GridItem>
          <GridItem width={[1, 1 / 2]}>
            <ol>
              <li>
                Unsere Redaktion steht für hochwertigen und positiven
                Digitalournalismus - ohne einen großen Medienkonzern im Rücken.
              </li>
              <li>
                Wir glauben daran, dass Technologie die Welt zu einem besseren
                Ort machen kann
              </li>
              <li>
                Freies Wissen, Open Source und Dezentralisierung sind fester
                Bestandteil usnerer DNA.
              </li>
              <li>
                Wir treten dafür ein, die Datenhoheit jedes Einzelnen und die
                digitalen Selbstbestimmung weiter zu stärken
              </li>
            </ol>
          </GridItem>
        </Grid>
      </Section>
    </PageLayout>
  ));
