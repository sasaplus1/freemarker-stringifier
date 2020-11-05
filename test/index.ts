import assert = require('assert');

import * as FreemarkerParser from 'freemarker-parser';

import { stringify } from '../index';

describe('index', function () {
  const Parser = new FreemarkerParser.Parser();

  describe('stringify', function () {
    it('can stringify Text', function () {
      const html = [
        '<!DOCTYPE html>',
        '<p class="paragraph">It Works!</p>'
      ].join('');

      const { tokens } = Parser.parse(html);

      const result = stringify(tokens);

      assert(result === html);
    });
    it('can stringify Macro', function () {
      const html = [
        '<#macro test>',
        'Test text',
        '</#macro>',
        '<@test />'
      ].join('');

      const { tokens } = Parser.parse(html);

      const result = stringify(tokens);

      assert(result === html);
    });
    it('can stringify Include', function () {
      const html = [
        '<#include "/path/to/file" />',
        '<#include "/path/to/file" encoding="utf-8" parse=false>'
      ].join('');

      const { tokens } = Parser.parse(html);

      const result = stringify(tokens);

      assert(result === html);
    });
    it('can stringify Interpolation', function () {
      const html = ['<p>', '${data.some.value}', '</p>'].join('');

      const { tokens } = Parser.parse(html);

      const result = stringify(tokens);

      assert(result === html);
    });
    it('ignore spaces when stringify', function () {
      const html = [
        '<#assign    value="1" />',
        '<#attempt > foo <#recover > bar </#attempt >'
      ].join('');

      const { tokens } = Parser.parse(html);

      const expect = [
        '<#assign    value="1" />',
        '<#attempt> foo <#recover> bar </#attempt>'
      ].join('');

      const result = stringify(tokens);

      assert(result === expect);
    });
    it('restore spaces when stringify', function () {
      const html = [
        '<#assign    value="1" />',
        '<#attempt   > foo <#recover   > bar </#attempt   >'
      ].join('');

      const { tokens } = Parser.parse(html);

      const expect = [
        '<#assign    value="1" />',
        '<#attempt   > foo <#recover   > bar </#attempt   >'
      ].join('');

      const result = stringify(tokens);

      assert(result === expect);
    });
  });
});
