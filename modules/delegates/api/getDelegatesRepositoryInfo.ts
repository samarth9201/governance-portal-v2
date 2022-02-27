import { SupportedNetworks } from 'lib/constants';

type RepositoryInfo = {
  owner: string;
  repo: string;
  page: string;
};

export function getDelegatesRepositoryInformation(network: SupportedNetworks): RepositoryInfo {
  const repoMainnet = {
    owner: 'velerofinance',
    repo: 'community',
    page: 'governance/delegates'
  };

  const repoKovan = {
    owner: 'velerofinance',
    repo: 'voting-delegates',
    page: 'delegates'
  };

  const delegatesRepositoryInfo = network === SupportedNetworks.VELAS ? repoMainnet : repoKovan;
  return delegatesRepositoryInfo;
}
