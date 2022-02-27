export enum SupportedNetworks {
  VELAS = 'velas',
  VELASTESTNET = 'velastestnet'
}

export const DEFAULT_NETWORK = SupportedNetworks.VELAS;

export const ETHERSCAN_PREFIXES = {
  [SupportedNetworks.VELAS]: 'evmexplorer.',
  [SupportedNetworks.VELASTESTNET]: 'evmexplorer.testnet.'
};

export const ETH_TX_STATE_DIFF_ENDPOINT = (
  network: SupportedNetworks.VELAS | SupportedNetworks.VELASTESTNET
) => `https://statediff.ethtx.info/api/decode/state-diffs/${network}`;

export const ABSTAIN = 0;

export const SPELL_SCHEDULED_DATE_OVERRIDES = {
  // '0xB70fB4eE900650DCaE5dD63Fd06E07F0b3a45d13': 'December 7, 2020, 14:00 UTC'
};

const expr = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
export const URL_REGEX = new RegExp(expr);

export const EXEC_PROPOSAL_INDEX =
  'https://raw.githubusercontent.com/velerofinance/community/main/governance/votes/active/proposals.json';
