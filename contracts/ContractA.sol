pragma solidity ^0.5.8;

import "./ContractB.sol";


contract ContractA {
    event A(address indexed a);

    function emitEventAFromContractB(ContractB contractB) external {
        contractB.emitEventA();
    }
}
