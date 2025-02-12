import Pricing from '@/app/pricing/page';
import '@testing-library/jest-dom';
const { render, screen } = require('@testing-library/react');
describe('Pricing component', () => {
  it('Should render a h1 tag with the content "Pricing component"', () => {
    render(<Pricing />);
    const h1Tag = screen.getByText('Pricing component');
    expect(h1Tag).toBeInTheDocument();
  });
});
