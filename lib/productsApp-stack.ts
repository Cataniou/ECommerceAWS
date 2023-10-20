import * as lambda from "aws-cdk-lib/aws-lambda"

import * as lambdaNodeJs from "aws-cdk-lib/aws-lambda-nodejs"

import * as cdk from "aws-cdk-lib"

import { Construct } from "constructs"

export class ProductsAppStack extends cdk.Stack {
    readonly producstFetchHandler: lambdaNodeJs.NodejsFunction

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        this.producstFetchHandler = new lambdaNodeJs.NodejsFunction(this, "ProductsFetchFunction", {
            runtime: lambda.Runtime.NODEJS_16_X,
            functionName: "ProductsFetchFunction",
            entry: "lambda/products/productsFetchFunction.ts",
            handler: "handler",
            memorySize: 128,
            timeout: cdk.Duration.seconds(5),
            bundling: {
                minify: true,
                sourceMap: false
            }
        })
    }
}