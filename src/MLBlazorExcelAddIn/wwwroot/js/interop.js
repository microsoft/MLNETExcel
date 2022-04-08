// Define MLFunctions
class MLFunctions
{
    static dotNetHelper;

    // Initialize Blazor .NET Helper
    static setDotNetHelper(value) {
        MLFunctions.dotNetHelper = value;
    }

    // Call .NET MakePrediction function
    static async predict(sepalLength, sepalWidth, petalLength, petalWidth) {
        const prediction = await MLFunctions.dotNetHelper.invokeMethodAsync('MakePrediction', sepalLength, sepalWidth, petalLength, petalWidth);
        console.log(prediction);
        return prediction;
    }
}

window.MLFunctions = MLFunctions;

// Register custom function
CustomFunctions.associate("IRIS.PREDICT", MLFunctions.predict);