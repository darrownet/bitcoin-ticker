import timeConverter from "../time.service";

describe('time service', () => {

  it('should properly format the time for PM', () => {
    const UNIX_timestamp = 1568052421978;
    const output = 'Sep 9, 2019 2:07:01 PM';
    expect(timeConverter(UNIX_timestamp)).toEqual(output);
  });

  it('should properly format the time for AM', () => {
    const UNIX_timestamp = 1568029112345;
    const output = 'Sep 9, 2019 7:38:32 AM';
    expect(timeConverter(UNIX_timestamp)).toEqual(output);
  });

});