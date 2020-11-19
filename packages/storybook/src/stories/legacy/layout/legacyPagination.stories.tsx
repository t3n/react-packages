import React, { useState } from 'react';
import { number, withKnobs } from '@storybook/addon-knobs';

import { LegacyPagination } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Legacy|Layout/Pagination',
  component: LegacyPagination,
  decorators: [withKnobs, storyContainerContentDecorator],
};

const Pagination: React.FC = () => {
  const pages = number('max. Seite', 1);
  const [page, setPage] = useState(1);
  return (
    <>
      <p>Aktuelle Seite: {page}</p>
      <LegacyPagination
        page={page}
        pages={pages}
        onClick={(value) => setPage(value)}
      />
    </>
  );
};

export const defaultStory = () => {
  return <Pagination />;
};

defaultStory.story = {
  name: 'Default',
};
