import { Module } from './module';

export enum DependencyType {
  Optional = 'Optional',
  Unstrict = 'Unstrict',
  Strict = 'Strict'
}

export type Dependency = {
  module: Module,
  type: DependencyType
}