pragma solidity ^0.5.8;


contract ContractB {
    event A(address a);

    function emitEventA() external {
        emit A(address(0));
    }
}
