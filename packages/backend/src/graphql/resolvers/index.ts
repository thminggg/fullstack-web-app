import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";
import { IResolvers } from "@graphql-tools/utils";
import path from "path";

const resolversArray = loadFilesSync(path.join(__dirname, "./**/resolvers.*"));

const mergedResolvers: IResolvers = mergeResolvers(resolversArray);

export default mergedResolvers;
