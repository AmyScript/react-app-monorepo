import { render } from '@testing-library/react';

import PetToys from './pet-toys';

describe('PetToys', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PetToys />);
    expect(baseElement).toBeTruthy();
  });
});
