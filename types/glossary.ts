// export interface GlossaryTerm {
//     id: string;
  
//     slug: string;
  
//     term: string;
  
//     definition: string;
  
//     category: string;
  
//     relatedTerms: string[];
//   }

export interface GlossaryTerm {
  id: string;
  slug: string;
  term: string;
  definition: string;
  relatedTerms?: string[];
}

export interface GlossaryGroup {
  id: string;
  letter: string;
  terms: GlossaryTerm[];
}