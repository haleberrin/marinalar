// lib/glossary.ts

import a from "@/data/glossary/a.json";
import b from "@/data/glossary/b.json";
import c from "@/data/glossary/c.json";
import d from "@/data/glossary/d.json";
import eF from "@/data/glossary/e-f.json";
import gH from "@/data/glossary/g-h.json";
import i from "@/data/glossary/i.json";
import k from "@/data/glossary/k.json";
import lM from "@/data/glossary/l-m.json";
import nO from "@/data/glossary/n-o.json";
import pR from "@/data/glossary/p-r.json";
import s from "@/data/glossary/s.json";
import tU from "@/data/glossary/t-u.json";
import vYz from "@/data/glossary/v-y-z.json";

import type { GlossaryTerm } from "@/types/glossary";

export function getGlossaryTermBySlug(
  slug: string
): GlossaryTerm | undefined {
  for (const group of glossary) {
    const term = group.terms.find(
      (term) => term.slug === slug
    );

    if (term) {
      return term;
    }
  }

  return undefined;
}

export function getGlossaryGroupByTerm(
  slug: string
): GlossaryGroup | undefined {
  return glossary.find((group) =>
    group.terms.some(
      (term) => term.slug === slug
    )
  );
}



import { GlossaryGroup } from "@/types/glossary";

export const glossary: GlossaryGroup[] = [
  a,
  b,
  c,
  d,
  eF,
  gH,
  i,
  k,
  lM,
  nO,
  pR,
  s,
  tU,
  vYz
];