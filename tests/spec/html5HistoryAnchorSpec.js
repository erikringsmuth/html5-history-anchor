describe('<a is="html5-history-anchor">', function() {
  it('should change the URL when clicked', function() {
    // arrange
    var a = document.createElement('a', 'html5-history-anchor');
    a.setAttribute('pushstate', 'pushstate');
    a.setAttribute('go', 'go');
    a.setAttribute('href', '#test');

    // act
    a.dispatchEvent(new Event('click'))

    // assert
    expect(window.location.hash).toEqual('#test');
  });
});
