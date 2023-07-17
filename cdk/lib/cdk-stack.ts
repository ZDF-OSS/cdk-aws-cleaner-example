import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { AwsCleaner }  from 'cdk-aws-cleaner';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new AwsCleaner(this, 'CleaningUpMyStackAgain',
    {
      cleanup: cdk.Duration.minutes(1)
    })

    const queue = new sqs.Queue(this, 'CdkQueue', {
    });
  }
}
