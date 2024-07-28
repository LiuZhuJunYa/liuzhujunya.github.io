declare module 'markdown-it-container' {
    import { PluginWithOptions } from 'markdown-it';
  
    interface ContainerOptions {
      validate?: (params: string) => boolean;
      render?: (tokens: any[], idx: number) => string;
    }
  
    const container: PluginWithOptions<ContainerOptions>;
    export default container;
  }
  