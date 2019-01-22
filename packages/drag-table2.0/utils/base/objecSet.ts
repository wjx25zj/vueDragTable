
export function objectSet(targetObect: any, sourceObject: any, setType?: 'union' | 'intersection') {
    setType = setType || 'intersection';
    if (targetObect && sourceObject) {
        for (const key in sourceObject) {
            if (targetObect.hasOwnProperty(key) || (setType === 'union' && sourceObject.hasOwnProperty(key))) {
                const value: any = targetObect[key];
                if (typeof value === 'object' && !Array.isArray(value)) {
                    objectSet(targetObect[key], sourceObject[key], setType);
                } else if (sourceObject[key] !== undefined) {
                    targetObect[key] = sourceObject[key];
                }
            }
        }
    }
    return targetObect;
}
