import websocket from "../data.service";

describe('data service', () => {

  it('should confirm websocket is available', () => {
    expect(typeof websocket).toEqual("object");
  });

});