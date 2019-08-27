import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import {
  CardSplitContent,
  Card,
  Grid,
  GridItem,
  Heading,
  Text,
  FormGroup,
  Input,
  Button,
  PageLayout
} from '@t3n/components';
import { layout, LayoutProps, FlexboxProps, flexbox } from 'styled-system';
import styled from 'styled-components';
import products from './products.png';

const ContentWrapper = styled.div<LayoutProps | FlexboxProps>`
  ${layout}
  ${flexbox}
`;

storiesOf('Projekte|SSO', module)
  .addDecorator(withKnobs)
  .add('Registrierung', () => (
    <PageLayout showHeader>
      <ContentWrapper
        height="100vh"
        justifyItems="center"
        alignContent="center"
      >
        <Grid noGap alignItems="center" height="100vh" justifyContent="center">
          <GridItem width={[4 / 5, 4 / 5, 2 / 3]}>
            <Card elevate splitted>
              <CardSplitContent variant="secondary">
                <img width="100%" src={products} alt="t3n Pro" />
                <Text bold>Jetzt gratis lesen</Text>
                <Heading as="h4" mt={0}>
                  Das Pro für digitale Pioniere_
                </Heading>
                <ul>
                  <li>Zugriff auf exklusive t3n.de-Artikel</li>
                  <li>t3n Magazin (Print/ePaper/Archiv)</li>
                  <li>Besondere Member-Events</li>
                  <li>Pioneers-Shirt, Sticker und mehr</li>
                  <li>
                    30 Tage <strong>gratis</strong> testen, danach 9,90
                    EUR/Monat
                  </li>
                </ul>
              </CardSplitContent>
              <CardSplitContent>
                <Heading mt={0} pt={0} as="h4">
                  {"Los geht's"}
                </Heading>
                <Text>
                  Bitte gib deine E-Mail-Adresse ein, um dich zu registrieren
                  oder anzumelden.
                </Text>
                <FormGroup label="E-Mail-Adresse" required>
                  <Input type="email" required />
                </FormGroup>
                <Button color="dark">Bestätigen</Button>
              </CardSplitContent>
            </Card>
          </GridItem>
        </Grid>
      </ContentWrapper>
    </PageLayout>
  ));
