function houseBuilder(rooms, color, owner) {
    var myHouse = {};
    myHouse.rooms = rooms;
    myHouse.color = color;
    myHouse.owner = owner;
    myHouse.size = 500;
    return myHouse;
}


houseBuilder(12, "red", "Tim");

function petBuilder(type, name) {
    var myPet = {};
    myPet.type = type;
    myPet.name = name;
    return myPet;
}


petBuilder("Siamese", "Slink");