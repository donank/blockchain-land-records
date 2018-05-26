pragma solidity ^0.4.22;

/// @title Land Record 
contract Record {
    string ipfshash;

    function saveHash(string _ipfshash) public {
        ipfshash = _ipfshash;
    }

    function readHash() public view returns (string){
        return ipfshash;
    }
}