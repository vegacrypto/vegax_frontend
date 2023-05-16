
import { metaMaskConnector, client } from '@/libs/wagmi.js';
import { connect, disconnect, getAccount, getNetwork } from '@wagmi/core';
import { useDispatch } from 'react-redux'
import { network } from '@/common/js/network';

export const connectMetamask = async function() {
    const dispatch = useDispatch()
    const needChain = network['Matic']

    const account = getAccount()
    if (account.isConnected) {
        await disconnect();
    }
    try {
        const result = await connect({
            connector: metaMaskConnector,
        })
        const { chain } = getNetwork()
        
        if (chain.id !== needChain.Id) {
            return;
        }
        dispatch({type: 'user/setAddress', value: result.account})
    } catch(err) {
        console.log('err:', err)
    }
}
