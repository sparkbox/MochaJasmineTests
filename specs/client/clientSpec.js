describe("The Client App...", function() {
  var client; 
  beforeEach(function(){
    client = new AppClient();
  });
  it("is a constructable object", function() {
    expect(typeof client).not.toBeUndefined();
  });
  it("Client name should be Panda.", function() {
    var name = client.getName();
    expect(name).toBe("Panda");
  });
  it("Can change the name of the client...", function() {
    var name;
    client.setName("George");
    name = client.getName();
    expect(name).toBe("George");
  });
});
