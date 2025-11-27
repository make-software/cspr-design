import {
  ExecutionResult,
  InfoGetDeployResultV1Compatible,
  InfoGetTransactionResultV1Compatible,
} from 'casper-js-sdk';
import {GetDeployResult, NetworkMajorVersion} from "../../../types/types";

export const getExecutionResultsFromDeployRawData = (
  deployRawData?: GetDeployResult
): ExecutionResult | null => {
  if (!deployRawData) return null;
  const networkVersionFromRawData =
    (deployRawData.api_version && deployRawData.api_version.startsWith('1')
      ? NetworkMajorVersion.V1
      : NetworkMajorVersion.V2) || NetworkMajorVersion.V2;

  if (networkVersionFromRawData === '1') {
    const transactionData =
      InfoGetDeployResultV1Compatible.fromJSON(deployRawData);

    return transactionData?.executionResults &&
      transactionData?.executionResults[0]
      ? ExecutionResult.fromV1(transactionData.executionResults?.[0].result)
      : null;
  }

  const transactionData =
    InfoGetTransactionResultV1Compatible.fromJSON(deployRawData);

  return transactionData?.executionInfo
    ? transactionData.executionInfo.executionResult
    : null;
};
