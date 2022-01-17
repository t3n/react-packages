import React, { useState } from 'react';
import { number } from '@storybook/addon-knobs';

import { LegacyPagination } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Legacy/Layout/Pagination',
  component: LegacyPagination,
  decorators: [storyContainerContentDecorator],
};

const Pagination: React.FC = () => {
  const totalPages = number('max. Seite', 1);
  const maxPageLinks = number('max. Links', 3);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <p>Aktuelle Seite: {currentPage}</p>
      <LegacyPagination
        currentPage={currentPage}
        totalPages={totalPages}
        maxPageLinks={maxPageLinks}
        onClick={(value) => setCurrentPage(value)}
      />
    </>
  );
};

export const defaultStory = () => {
  return <Pagination />;
};

defaultStory.storyName = 'Default';
