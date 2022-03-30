import { DefaultLayout } from "../../components/layouts/defaultLayout";
import { SwapStyle, Box } from './style';

export function Swap() {
    return (
        <DefaultLayout>
            <SwapStyle>
                <Box>
                    <div className="head">
                        <h3>Swap</h3>
                        <button>
                            <i className="bi bi-gear-fill"></i>
                        </button>
                    </div>
                    {/* TODO swap coins */}
                    <div className="connect-to-wallet">
                        <button>Connect Wallet</button>
                    </div>
                </Box>
            </SwapStyle>
        </DefaultLayout>
    )
}