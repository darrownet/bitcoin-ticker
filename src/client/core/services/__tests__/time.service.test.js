import timeConverter from "../time.service";

describe('time service', () => {

  it('should properly format the time', () => {
    const UNIX_timestamp = 1568052421978;
    const output = 'Sep 9, 2019 2:07:01 PM';
    expect(timeConverter(UNIX_timestamp)).toEqual(output);
  });

});