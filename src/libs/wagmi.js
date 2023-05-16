import { configureChains, createClient } from '@wagmi/core'
import { mainnet, polygonMumbai, polygon } from '@wagmi/chains'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { publicProvider } from '@wagmi/core/providers/public'

const { chains, provider, webSocketProvider } = configureChains(
    [mainnet, polygonMumbai, polygon],
    [publicProvider()],
)

let metaMaskConnector = new MetaMaskConnector({
    chains
}) 

const client = createClient({
    autoConnect: true,
    connectors: [
        metaMaskConnector,
    ],
    provider,
    webSocketProvider,
})

export {
    client,
    metaMaskConnector
}
