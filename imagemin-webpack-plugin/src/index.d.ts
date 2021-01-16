import { Options as GifsicleOptions } from 'imagemin-gifsicle-plugin';
import { Options as JpegTranOptions } from 'imagemin-jpegtran-plugin';
import { Options as OptiPngOptions } from 'imagemin-optipng-plugin';
import { Options as SvgoOptions } from 'imagemin-svgo';

import { Plugin } from 'webpack';

export default ImageminWebpackPlugin;

declare class ImageminWebpackPlugin extends Plugin {
  constructor(options: ImageminWebpackPlugin.Options);
}

declare namespace ImageminWebpackPlugin {
  type TestOption = RegExp | string | ((file: string) => boolean);

  // Generic options for plugins missing typings
  interface ExternalOptions {
    [key: string]: any;
  }

  interface Options {
    disable?: boolean;
    test?: TestOption | TestOption[];
    maxConcurrency?: number;
    optipng?: OptiPngOptions | null;
    gifsicle?: GifsicleOptions | null;
    jpegtran?: JpegTranOptions | null;
    svgo?: SvgoOptions | null;
    pngquant?: ExternalOptions | null;
    plugins?: Promise<Buffer>[] | [];
    externalImages?: {
      context: string;
      sources: string[] | (() => string[]);
      destination?: string | (() => string);
      fileName?: string | null;
    };
    minFileSize?: number;
    maxFileSize?: number;
    cacheFolder?: string;
    onlyUseIfSmaller?: boolean;
  }
}
