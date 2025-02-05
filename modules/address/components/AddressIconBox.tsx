import React from 'react';
import AddressIcon from './AddressIcon';
import { Box, Text, Link as ExternalLink, Flex } from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';
import { getNetwork } from 'lib/maker';
import { getEtherscanLink } from 'lib/utils';
import { Address } from './Address';
import Tooltip from 'modules/app/components/Tooltip';
import { VoteProxyInfo } from '../types/addressApiResponse';

type PropTypes = {
  address: string;
  voteProxyInfo?: VoteProxyInfo;
  showExternalLink: boolean;
  isOwner?: boolean;
};

export default function AddressIconBox({
  address,
  voteProxyInfo,
  showExternalLink,
  isOwner
}: PropTypes): React.ReactElement {
  const tooltipLabel = voteProxyInfo ? (
    <Box sx={{ p: 2 }}>
      <Text as="p">
        <Text sx={{ fontWeight: 'bold' }}>Contract:</Text> {voteProxyInfo.voteProxyAddress}
      </Text>
      <Text as="p">
        <Text sx={{ fontWeight: 'bold' }}>Hot:</Text> {voteProxyInfo.hot}
      </Text>
      <Text as="p">
        <Text sx={{ fontWeight: 'bold' }}>Cold:</Text> {voteProxyInfo.cold}
      </Text>
    </Box>
  ) : null;

  return (
    <Flex>
      <Box sx={{ minWidth: '41px', mr: 2 }}>
        <AddressIcon address={address} width={41} />
      </Box>
      <Flex
        sx={{
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Flex>
          <Text>
            <Address address={address} />
          </Text>
          {showExternalLink && (
            <ExternalLink
              title="View on etherscan"
              href={getEtherscanLink(getNetwork(), address, 'address')}
              target="_blank"
            >
              <Text as="p" sx={{ fontSize: [1, 3] }}>
                <Icon ml={2} name="arrowTopRight" size={2} />
              </Text>
            </ExternalLink>
          )}
          {isOwner && (
            <Flex
              sx={{
                display: 'inline-flex',
                backgroundColor: 'tagColorSevenBg',
                borderRadius: 'roundish',
                padding: '3px 6px',
                alignItems: 'center',
                color: 'tagColorSeven',
                ml: 2
              }}
            >
              <Text sx={{ fontSize: 1 }}>Owner</Text>
            </Flex>
          )}
        </Flex>
        {voteProxyInfo && (
          <Flex>
            <Text sx={{ color: 'textSecondary', fontSize: [1, 2] }}>Proxy Contract</Text>
            <Tooltip label={tooltipLabel}>
              <Box>
                <Icon name="question" ml={2} mt={['2px', '4px']} />
              </Box>
            </Tooltip>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
