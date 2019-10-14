/* eslint-disable jest/expect-expect */

describe('Autocomplete', () => {
  describe('activator', () => {
    it.todo('renders the activator');
    describe('On small screen with children', () => {
      it.todo(
        'renders an InlinePopover with the children when the activator is focused',
        // screen readers require the list to appear as the next tabable element in the DOM
      );
      it.todo(
        're-renders an InlinePopover with the children after it was removed and the user keeps typing',
        // this happens in a single select autocomplete when selecting an option via keyboard since the focus is not lost on the field
      );
      it.todo('hides the InlinePopover when tapping outside the Autocomplete');
      it.todo('retains focus after tapping an option');
      it.todo('retains focus after scrolling the popover');
    });

    describe('On large screen with children', () => {
      it.todo(
        'renders a Popover with the children in when the activator is focused',
      );
      it.todo(
        're-renders a Popover with the children after it was removed and the user keeps typing',
      );
      it.todo('hides the Popover when clicking outside the Autocomplete');
      it.todo('retains focus after tapping an option');
      it.todo('retains focus after scrolling the popover');
    });
  });

  describe('allowMultiple', () => {
    describe('On small screen', () => {
      it.todo(
        'Does not close the InlinePopover when the contextOnSelect is called and allowMultiple is true',
      );
      it.todo(
        'Does close the InlinePopover when the contextOnSelect is called and allowMultiple is false',
      );
    });
    describe('On large screen', () => {
      it.todo(
        'Does not close the Popover when the contextOnselect is called and allowMultiple is true',
      );
      it.todo(
        'Does close the Popover when the contextOnselect is called and allowMultiple is false',
        () => {},
      );
    });
  });

  describe('inline', () => {
    it.todo('renders inline autocompletion if true', () => {});
    it.todo(
      'keyboard focuses the option matching the inlinecompletion',
      () => {},
    );
    it.todo('does not render inline autcompletion if false', () => {});
  });

  describe('highlightMatches', () => {
    it.todo('stores the texfield value on context if true', () => {});
    it.todo('doesnt store the texfield value on context', () => {});
  });
});