/* --------------------------------------------------------------------------------------------
 *  Licensed to the .NET Foundation under one or more agreements.
*  The .NET Foundation licenses this file to you under the MIT license.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { DotnetInstallMode } from './DotnetInstallMode';
import { IInstallationDirectoryProvider } from './IInstallationDirectoryProvider';
import { RuntimeInstallationDirectoryProvider } from './RuntimeInstallationDirectoryProvider';
import { SdkInstallationDirectoryProvider } from './SdkInstallationDirectoryProvider';


export function directoryProviderFactory(mode: DotnetInstallMode, storagePath: string) : IInstallationDirectoryProvider
{
    return mode === 'runtime' ? new RuntimeInstallationDirectoryProvider(storagePath) : new SdkInstallationDirectoryProvider(storagePath);
}
