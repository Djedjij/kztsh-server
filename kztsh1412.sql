PGDMP                         {            kztsh-server    15.3    15.3 s    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    28605    kztsh-server    DATABASE     �   CREATE DATABASE "kztsh-server" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "kztsh-server";
                postgres    false            �            1259    28606 
   categories    TABLE     $  CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    images json,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "itemId" integer
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    28611    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    214            �           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    215            �            1259    28612    characteristics    TABLE       CREATE TABLE public.characteristics (
    id integer NOT NULL,
    name character varying(255),
    value character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "categoryId" integer
);
 #   DROP TABLE public.characteristics;
       public         heap    postgres    false            �            1259    28617    characteristics_id_seq    SEQUENCE     �   CREATE SEQUENCE public.characteristics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.characteristics_id_seq;
       public          postgres    false    216            �           0    0    characteristics_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.characteristics_id_seq OWNED BY public.characteristics.id;
          public          postgres    false    217            �            1259    28618    directorContacts    TABLE     ]  CREATE TABLE public."directorContacts" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    job character varying(255) NOT NULL,
    "internalPhone" character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 &   DROP TABLE public."directorContacts";
       public         heap    postgres    false            �            1259    28623    directorContacts_id_seq    SEQUENCE     �   CREATE SEQUENCE public."directorContacts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."directorContacts_id_seq";
       public          postgres    false    218            �           0    0    directorContacts_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."directorContacts_id_seq" OWNED BY public."directorContacts".id;
          public          postgres    false    219            �            1259    28624    directorPhotoContacts    TABLE     -  CREATE TABLE public."directorPhotoContacts" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    job character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 +   DROP TABLE public."directorPhotoContacts";
       public         heap    postgres    false            �            1259    28629    directorPhotoContacts_id_seq    SEQUENCE     �   CREATE SEQUENCE public."directorPhotoContacts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."directorPhotoContacts_id_seq";
       public          postgres    false    220            �           0    0    directorPhotoContacts_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."directorPhotoContacts_id_seq" OWNED BY public."directorPhotoContacts".id;
          public          postgres    false    221            �            1259    28630    galeries    TABLE     �   CREATE TABLE public.galeries (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    img character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.galeries;
       public         heap    postgres    false            �            1259    28635    galeries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.galeries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.galeries_id_seq;
       public          postgres    false    222            �           0    0    galeries_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.galeries_id_seq OWNED BY public.galeries.id;
          public          postgres    false    223            �            1259    28636    items    TABLE     N  CREATE TABLE public.items (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    icon character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.items;
       public         heap    postgres    false            �            1259    28641    items_id_seq    SEQUENCE     �   CREATE SEQUENCE public.items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.items_id_seq;
       public          postgres    false    224            �           0    0    items_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.items_id_seq OWNED BY public.items.id;
          public          postgres    false    225            �            1259    28642    marketingContacts    TABLE     ^  CREATE TABLE public."marketingContacts" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    job character varying(255) NOT NULL,
    "internalPhone" character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 '   DROP TABLE public."marketingContacts";
       public         heap    postgres    false            �            1259    28647    marketingContacts_id_seq    SEQUENCE     �   CREATE SEQUENCE public."marketingContacts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."marketingContacts_id_seq";
       public          postgres    false    226            �           0    0    marketingContacts_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."marketingContacts_id_seq" OWNED BY public."marketingContacts".id;
          public          postgres    false    227            �            1259    28648    news    TABLE     F  CREATE TABLE public.news (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    "smallDescription" character varying(255) NOT NULL,
    img character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.news;
       public         heap    postgres    false            �            1259    28653    news_id_seq    SEQUENCE     �   CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.news_id_seq;
       public          postgres    false    228            �           0    0    news_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;
          public          postgres    false    229            �            1259    28654    reportingLinks    TABLE       CREATE TABLE public."reportingLinks" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    src character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "reportingId" integer
);
 $   DROP TABLE public."reportingLinks";
       public         heap    postgres    false            �            1259    28659    reportingLinks_id_seq    SEQUENCE     �   CREATE SEQUENCE public."reportingLinks_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."reportingLinks_id_seq";
       public          postgres    false    230            �           0    0    reportingLinks_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."reportingLinks_id_seq" OWNED BY public."reportingLinks".id;
          public          postgres    false    231            �            1259    28660 
   reportings    TABLE     �   CREATE TABLE public.reportings (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.reportings;
       public         heap    postgres    false            �            1259    28663    reportings_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reportings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.reportings_id_seq;
       public          postgres    false    232            �           0    0    reportings_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.reportings_id_seq OWNED BY public.reportings.id;
          public          postgres    false    233            �            1259    28664    tableCharacteristics    TABLE     �   CREATE TABLE public."tableCharacteristics" (
    id integer NOT NULL,
    name character varying(255)[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "categoryId" integer
);
 *   DROP TABLE public."tableCharacteristics";
       public         heap    postgres    false            �            1259    28669    tableCharacteristics_id_seq    SEQUENCE     �   CREATE SEQUENCE public."tableCharacteristics_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."tableCharacteristics_id_seq";
       public          postgres    false    234            �           0    0    tableCharacteristics_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."tableCharacteristics_id_seq" OWNED BY public."tableCharacteristics".id;
          public          postgres    false    235            �            1259    28670    tableNameCharacteristics    TABLE     �   CREATE TABLE public."tableNameCharacteristics" (
    id integer NOT NULL,
    name character varying(255)[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "categoryId" integer
);
 .   DROP TABLE public."tableNameCharacteristics";
       public         heap    postgres    false            �            1259    28675    tableNameCharacteristics_id_seq    SEQUENCE     �   CREATE SEQUENCE public."tableNameCharacteristics_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."tableNameCharacteristics_id_seq";
       public          postgres    false    236            �           0    0    tableNameCharacteristics_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."tableNameCharacteristics_id_seq" OWNED BY public."tableNameCharacteristics".id;
          public          postgres    false    237            �            1259    28676    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    28681    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    238            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    239            �            1259    28761    videos    TABLE     �   CREATE TABLE public.videos (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    url character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.videos;
       public         heap    postgres    false            �            1259    28760    videos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.videos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.videos_id_seq;
       public          postgres    false    241            �           0    0    videos_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.videos_id_seq OWNED BY public.videos.id;
          public          postgres    false    240            �           2604    28682    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214            �           2604    28683    characteristics id    DEFAULT     x   ALTER TABLE ONLY public.characteristics ALTER COLUMN id SET DEFAULT nextval('public.characteristics_id_seq'::regclass);
 A   ALTER TABLE public.characteristics ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216            �           2604    28684    directorContacts id    DEFAULT     ~   ALTER TABLE ONLY public."directorContacts" ALTER COLUMN id SET DEFAULT nextval('public."directorContacts_id_seq"'::regclass);
 D   ALTER TABLE public."directorContacts" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218            �           2604    28685    directorPhotoContacts id    DEFAULT     �   ALTER TABLE ONLY public."directorPhotoContacts" ALTER COLUMN id SET DEFAULT nextval('public."directorPhotoContacts_id_seq"'::regclass);
 I   ALTER TABLE public."directorPhotoContacts" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220            �           2604    28686    galeries id    DEFAULT     j   ALTER TABLE ONLY public.galeries ALTER COLUMN id SET DEFAULT nextval('public.galeries_id_seq'::regclass);
 :   ALTER TABLE public.galeries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222            �           2604    28687    items id    DEFAULT     d   ALTER TABLE ONLY public.items ALTER COLUMN id SET DEFAULT nextval('public.items_id_seq'::regclass);
 7   ALTER TABLE public.items ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224            �           2604    28688    marketingContacts id    DEFAULT     �   ALTER TABLE ONLY public."marketingContacts" ALTER COLUMN id SET DEFAULT nextval('public."marketingContacts_id_seq"'::regclass);
 E   ALTER TABLE public."marketingContacts" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226            �           2604    28689    news id    DEFAULT     b   ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);
 6   ALTER TABLE public.news ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228            �           2604    28690    reportingLinks id    DEFAULT     z   ALTER TABLE ONLY public."reportingLinks" ALTER COLUMN id SET DEFAULT nextval('public."reportingLinks_id_seq"'::regclass);
 B   ALTER TABLE public."reportingLinks" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230            �           2604    28691    reportings id    DEFAULT     n   ALTER TABLE ONLY public.reportings ALTER COLUMN id SET DEFAULT nextval('public.reportings_id_seq'::regclass);
 <   ALTER TABLE public.reportings ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    232            �           2604    28692    tableCharacteristics id    DEFAULT     �   ALTER TABLE ONLY public."tableCharacteristics" ALTER COLUMN id SET DEFAULT nextval('public."tableCharacteristics_id_seq"'::regclass);
 H   ALTER TABLE public."tableCharacteristics" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    234            �           2604    28693    tableNameCharacteristics id    DEFAULT     �   ALTER TABLE ONLY public."tableNameCharacteristics" ALTER COLUMN id SET DEFAULT nextval('public."tableNameCharacteristics_id_seq"'::regclass);
 L   ALTER TABLE public."tableNameCharacteristics" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    237    236            �           2604    28694    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    239    238            �           2604    28764 	   videos id    DEFAULT     f   ALTER TABLE ONLY public.videos ALTER COLUMN id SET DEFAULT nextval('public.videos_id_seq'::regclass);
 8   ALTER TABLE public.videos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    241    240    241            s          0    28606 
   categories 
   TABLE DATA           g   COPY public.categories (id, name, description, images, "createdAt", "updatedAt", "itemId") FROM stdin;
    public          postgres    false    214   ��       u          0    28612    characteristics 
   TABLE DATA           b   COPY public.characteristics (id, name, value, "createdAt", "updatedAt", "categoryId") FROM stdin;
    public          postgres    false    216   �       w          0    28618    directorContacts 
   TABLE DATA           m   COPY public."directorContacts" (id, name, job, "internalPhone", phone, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   p�       y          0    28624    directorPhotoContacts 
   TABLE DATA           a   COPY public."directorPhotoContacts" (id, name, job, image, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   5�       {          0    28630    galeries 
   TABLE DATA           K   COPY public.galeries (id, name, img, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   ��       }          0    28636    items 
   TABLE DATA           ^   COPY public.items (id, title, description, image, icon, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    224   ڻ                 0    28642    marketingContacts 
   TABLE DATA           n   COPY public."marketingContacts" (id, name, job, "internalPhone", phone, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   ��       �          0    28648    news 
   TABLE DATA           h   COPY public.news (id, name, description, "smallDescription", img, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    228   ��       �          0    28654    reportingLinks 
   TABLE DATA           b   COPY public."reportingLinks" (id, name, src, "createdAt", "updatedAt", "reportingId") FROM stdin;
    public          postgres    false    230   ��       �          0    28660 
   reportings 
   TABLE DATA           H   COPY public.reportings (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    232   #�       �          0    28664    tableCharacteristics 
   TABLE DATA           b   COPY public."tableCharacteristics" (id, name, "createdAt", "updatedAt", "categoryId") FROM stdin;
    public          postgres    false    234   ��       �          0    28670    tableNameCharacteristics 
   TABLE DATA           f   COPY public."tableNameCharacteristics" (id, name, "createdAt", "updatedAt", "categoryId") FROM stdin;
    public          postgres    false    236   	�       �          0    28676    users 
   TABLE DATA           M   COPY public.users (id, name, password, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    238   ��       �          0    28761    videos 
   TABLE DATA           I   COPY public.videos (id, name, url, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    241   ,�       �           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 58, true);
          public          postgres    false    215            �           0    0    characteristics_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.characteristics_id_seq', 146, true);
          public          postgres    false    217            �           0    0    directorContacts_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."directorContacts_id_seq"', 11, true);
          public          postgres    false    219            �           0    0    directorPhotoContacts_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."directorPhotoContacts_id_seq"', 6, true);
          public          postgres    false    221            �           0    0    galeries_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.galeries_id_seq', 41, true);
          public          postgres    false    223            �           0    0    items_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.items_id_seq', 10, true);
          public          postgres    false    225            �           0    0    marketingContacts_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."marketingContacts_id_seq"', 16, true);
          public          postgres    false    227            �           0    0    news_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.news_id_seq', 4, true);
          public          postgres    false    229            �           0    0    reportingLinks_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."reportingLinks_id_seq"', 44, true);
          public          postgres    false    231            �           0    0    reportings_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.reportings_id_seq', 7, true);
          public          postgres    false    233            �           0    0    tableCharacteristics_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."tableCharacteristics_id_seq"', 78, true);
          public          postgres    false    235            �           0    0    tableNameCharacteristics_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."tableNameCharacteristics_id_seq"', 7, true);
          public          postgres    false    237            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 4, true);
          public          postgres    false    239            �           0    0    videos_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.videos_id_seq', 1, true);
          public          postgres    false    240            �           2606    28696    categories categories_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_name_key;
       public            postgres    false    214            �           2606    28698    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    214            �           2606    28700 $   characteristics characteristics_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.characteristics
    ADD CONSTRAINT characteristics_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.characteristics DROP CONSTRAINT characteristics_pkey;
       public            postgres    false    216            �           2606    28702 &   directorContacts directorContacts_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."directorContacts"
    ADD CONSTRAINT "directorContacts_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."directorContacts" DROP CONSTRAINT "directorContacts_pkey";
       public            postgres    false    218            �           2606    28704 0   directorPhotoContacts directorPhotoContacts_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."directorPhotoContacts"
    ADD CONSTRAINT "directorPhotoContacts_pkey" PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public."directorPhotoContacts" DROP CONSTRAINT "directorPhotoContacts_pkey";
       public            postgres    false    220            �           2606    28706    galeries galeries_img_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.galeries
    ADD CONSTRAINT galeries_img_key UNIQUE (img);
 C   ALTER TABLE ONLY public.galeries DROP CONSTRAINT galeries_img_key;
       public            postgres    false    222            �           2606    28708    galeries galeries_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.galeries
    ADD CONSTRAINT galeries_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.galeries DROP CONSTRAINT galeries_pkey;
       public            postgres    false    222            �           2606    28710    items items_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.items DROP CONSTRAINT items_pkey;
       public            postgres    false    224            �           2606    28712    items items_title_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_title_key UNIQUE (title);
 ?   ALTER TABLE ONLY public.items DROP CONSTRAINT items_title_key;
       public            postgres    false    224            �           2606    28714 (   marketingContacts marketingContacts_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."marketingContacts"
    ADD CONSTRAINT "marketingContacts_pkey" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."marketingContacts" DROP CONSTRAINT "marketingContacts_pkey";
       public            postgres    false    226            �           2606    28716    news news_name_key 
   CONSTRAINT     M   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_name_key UNIQUE (name);
 <   ALTER TABLE ONLY public.news DROP CONSTRAINT news_name_key;
       public            postgres    false    228            �           2606    28718    news news_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.news DROP CONSTRAINT news_pkey;
       public            postgres    false    228            �           2606    28720 "   reportingLinks reportingLinks_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."reportingLinks"
    ADD CONSTRAINT "reportingLinks_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."reportingLinks" DROP CONSTRAINT "reportingLinks_pkey";
       public            postgres    false    230            �           2606    28722 %   reportingLinks reportingLinks_src_key 
   CONSTRAINT     c   ALTER TABLE ONLY public."reportingLinks"
    ADD CONSTRAINT "reportingLinks_src_key" UNIQUE (src);
 S   ALTER TABLE ONLY public."reportingLinks" DROP CONSTRAINT "reportingLinks_src_key";
       public            postgres    false    230            �           2606    28724    reportings reportings_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.reportings
    ADD CONSTRAINT reportings_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.reportings DROP CONSTRAINT reportings_name_key;
       public            postgres    false    232            �           2606    28726    reportings reportings_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.reportings
    ADD CONSTRAINT reportings_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.reportings DROP CONSTRAINT reportings_pkey;
       public            postgres    false    232            �           2606    28728 .   tableCharacteristics tableCharacteristics_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."tableCharacteristics"
    ADD CONSTRAINT "tableCharacteristics_pkey" PRIMARY KEY (id);
 \   ALTER TABLE ONLY public."tableCharacteristics" DROP CONSTRAINT "tableCharacteristics_pkey";
       public            postgres    false    234            �           2606    28730 6   tableNameCharacteristics tableNameCharacteristics_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."tableNameCharacteristics"
    ADD CONSTRAINT "tableNameCharacteristics_pkey" PRIMARY KEY (id);
 d   ALTER TABLE ONLY public."tableNameCharacteristics" DROP CONSTRAINT "tableNameCharacteristics_pkey";
       public            postgres    false    236            �           2606    28732    users users_name_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_name_key UNIQUE (name);
 >   ALTER TABLE ONLY public.users DROP CONSTRAINT users_name_key;
       public            postgres    false    238            �           2606    28734    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    238            �           2606    28770    videos videos_name_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.videos
    ADD CONSTRAINT videos_name_key UNIQUE (name);
 @   ALTER TABLE ONLY public.videos DROP CONSTRAINT videos_name_key;
       public            postgres    false    241            �           2606    28768    videos videos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.videos
    ADD CONSTRAINT videos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.videos DROP CONSTRAINT videos_pkey;
       public            postgres    false    241            �           2606    28735 !   categories categories_itemId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT "categories_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES public.items(id) ON UPDATE CASCADE ON DELETE SET NULL;
 M   ALTER TABLE ONLY public.categories DROP CONSTRAINT "categories_itemId_fkey";
       public          postgres    false    3267    214    224            �           2606    28740 /   characteristics characteristics_categoryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.characteristics
    ADD CONSTRAINT "characteristics_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE SET NULL;
 [   ALTER TABLE ONLY public.characteristics DROP CONSTRAINT "characteristics_categoryId_fkey";
       public          postgres    false    3255    214    216            �           2606    28745 .   reportingLinks reportingLinks_reportingId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."reportingLinks"
    ADD CONSTRAINT "reportingLinks_reportingId_fkey" FOREIGN KEY ("reportingId") REFERENCES public.reportings(id) ON UPDATE CASCADE ON DELETE SET NULL;
 \   ALTER TABLE ONLY public."reportingLinks" DROP CONSTRAINT "reportingLinks_reportingId_fkey";
       public          postgres    false    232    230    3283            �           2606    28750 9   tableCharacteristics tableCharacteristics_categoryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."tableCharacteristics"
    ADD CONSTRAINT "tableCharacteristics_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE SET NULL;
 g   ALTER TABLE ONLY public."tableCharacteristics" DROP CONSTRAINT "tableCharacteristics_categoryId_fkey";
       public          postgres    false    214    3255    234            �           2606    28755 A   tableNameCharacteristics tableNameCharacteristics_categoryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."tableNameCharacteristics"
    ADD CONSTRAINT "tableNameCharacteristics_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE SET NULL;
 o   ALTER TABLE ONLY public."tableNameCharacteristics" DROP CONSTRAINT "tableNameCharacteristics_categoryId_fkey";
       public          postgres    false    236    3255    214            s      x��[˒�q]����uU��hg{㍷��]ݎ�¡O H��L� H@�1x�(�!�!���/������{�ޙ�$
���]�����<'3[m�����v����_�����W�'�y{��׿��'�{P���~�x��[���pq���N⚪ڿX\����������� �G���E�p��)�<迥�����[�z.�s��HM��JoD�1�Ɣl�d��e�����s����6BI�R�����*�eп��uCj���k�>,�j�������U���?e1����~~�������A>y�ona����E�D�bV����-���5!���4���I��
��I��Y%t�9��U�fz]f[��Nqb]�Cjf6�uK����C�7H����~�y�������į�d�j/Tx���M6%�E	���:���V�u��)�ڤ�u'Ӷ�c���(l�H:!���\�o�����*[E�s�m+r�^(/}
Ψ��:��-�Ȗ&�H�,���Z��\������vnn䔕�������橝�߇��f[�������n�[|�k��AL)FCSm�Zas��v�F�\\v��fz�q�ٹ�ib��Cj��/0�{�g��vYoW_k��c��x~�r�?�W��ݵ�U���봚���9m��ք�Һ�7V�x�D0����]�c����Y�(0��h�(���T��ť� �9�s�-���{>����O��|	^�x�&����y�҃��yrmȭ����D%�L^d��j�k[oF�1���$��5���"&��ɶ�Z����j%�t��b,��}n�0]�d�v��T�R���}�0��!5�[0��9ڳw�M�b�D����9O��5�O)t��Bu^�����Zc�I�R�&g�����È�v����֍�n��_�N���8a�:@jد�TڍMe�^�O�[=�6��,l���bX]����-��UvM���im��&�l��5^ĠQ�˦ҙ�ga�M�{;5��!5�$��l�hl��j�5͢mۦ��"EȢ�J���oS�]�������&ىY��Y����_|�b%��gʿ;�3��M��p�DO���s�����sވ{��J�9'�u�Up�>v��=ڷ8y���������a܌�i����_��A�)����k<W�Pܻ�x�l�+�&�[�x�{�1�[�����;x���Ň������O��)��e����6��&:ݵ�س��XS�?^��u�ڽ)HLҘ>�;�}Т��si���R�U�]R3%�86~E
���.�eeb+��%O����%��Cڐ��L�9�v�F��xH�t䂁oY8�p���'���X�τ�^�.H��0���S �Y�p���s�Y���p'�9��4o)�yi0�C��!�[H���g�%'�dk�d\�u2�;�Ǵl��\���1٪��v�� ���_7vA#u�!2zP�; VY I�������N�0���Mİ�!hJ�`c����Wɫ��E�FY�=4�K@Ż]L66O�]mcwJ�&޾>���-��xg��ͶM����s��G���m��3�9��H��|�))���������5|�v2�A����1�1o|������M�Н���]6�z���L�#����+�L���d��eO������3�������c{>X�"��3'��� �Q(�P�!�9 u���=��4��v[�9�ӄ�և�!����\#hC����ID���[����n��u�<�A4\p��IM�w}�udW�އ��c�Dlk�y@��@Hm��J_�����	��@�̦��=�Y'� �6m��s�KhZ�:p�sֲ�lb�Un|�f�n[5Orbl�T����ݙkE��'ֻq�m�2��Etf�}��S��S�v |qM��'|��ļm�Q�� �`�ԊnE�6�4��;����:Z���������	��d�����6n&����Lş`b��R���^��#=��q��#79��ٸ�l\ixO�X�MM[<�z��:��2�����r�� �1�@�k�߻���Wi�.�����U6d�yߴ��\��e��7�A����)�`B�h�\�&&�y��T�����ƒ��A�]:@��#3������p�m��'?<�Uw�~]'��Ë-c�\�9\��0��C�yh�<�3�Q%�`,�z)����S�n���6A�IO@�͡���eWz�Z%��I�� �.`��VHaq���;�V����G�ol��A�� �Z��~�G����18H�/�ឣ1� 9}�����R��BfII��1)d���K�t�m	&c�k3��Z0y�,T�TdW[��v��cT�, ��h��VĦ��wުTm��#�*�"#���\+������M���NI�@>�6�>��YYc����O�&d��,"��)����D�xE��}ږv������i���lο��z|a��۰db!��{�� ��oV�ӻl����=���W�0g��ߡ�/%������p�����S"ՕhZ����D��6� b�ܳ5ܰ���R!�8&�N��R�mn�m��i=���$�N`��GY�/����sN��X�.ɶ5�І2�Z:82�V�`v
��ZZ@J�6"RG�:�Ȝ���=�al�)i��p���i3��G�����vnL����M��8��$��5@U���u=�im ��k&&�14�v���=r0#�#��W
2%�Z���Ɇ��`o�_V��)�o���}ZI3��;|�s:ѵM��1�i�v��ޔX����q���
��1dfڭ��>D�9�����_�������(9��;�� �tr�?[[�t��{��#��$@?T8�K)�y�]\^=���ҋ�͏7�䱑m  �3`�.`�&z���զ��T�o[��3auC��IBЧ�������%����-\��ݶ�U�s
"1��;��i���M�&�vcKo��1�.�
|�:/q�m����qB$�o`KKW��?f�aXe*�SO��Ôg��nI�?fL�S��Z����2S,0+��L�S1�P��4��:1Iǿ������$�:����,!do�H��7Ո�uq9�֤�I�m���$�>I�?��뿨�h��|������{|p('K	 &H��h��<�r'O�JO��h���=�l�'p�����z
{���s����V\$�4V��^�;
��@1��@^��Z��3Ɓ	��glh��ml���E�{jq�CX���|N�z��;� �Ī���{�[�w�a�Wپ��?%�q���}&.�y��/�o����A���1X���H_��:��)�Y'��y��É!,6B��S����$t}��%�b��L&+X6�����Ey��p)�Ê���w�7����,e�q8�-j��S�#���{8�[�8uv������<$O)C7$m����cJm�.;:\�N�`��S��ND�꤬�V���(T�u-P?О�5P?�q*�6Yũ���!O#�Cvf̟$㟧��UY 8gX�ȮDQ Rk��I@j�X��`ir[����������e�
��\��B��)p�Y%}9k<pm.�=�P�3�i\u�p-&ù�(%�L�kP0���9�X�>&�6�@]�Q��Q�p���[P`��<U3T�r���>1帡��r/_�w*��78�������ˢ�c.�4��aÝ��QP{�������(����E��ț�&S� )��V��p�S�m#�^���'��nb�Tu��wi���\8M�P��������j?���!L�1�}O��W�j���?-��6�AD�d~CF���O813���ޥ�ժ	�	���I� �f,G�N�	���J2٨i0�H�<�NY����P��-=b��[�ޱ4��g��F��
ٵ�t9�PT��R�q�j��J�=�P��D�֘?�)�v�^o0����k��C�a�0�����<���I
5�K�½im�;��"�P�=�|n{wͫ0����<7�\`��^�E �  ث,�i���(x(r���Q;�0�,~�_bO�����5��9o��U�q�ԥ0�G�5w%;�R6q���P�� �L���"�*�r���A���k"V�v9C�.�|&�P�x��pYh%��մ=^8��>���5$����ϯ��wԓ��R��9q��8��k�������o5�q(<>���/_zȮ�Ŧ����`�ܟ���)�J�v6��Q�M윇�AN�?��<�N ��!;���v�}�ǬraleR�;���l/��aW��1:O��5[�%wlUEQӦr�u1�����c�) ���[Kt��')\�D�}r˼,�MVP�����5nR���/Y���N�0�O0��!7����w�Q�9����[p����[����,z{�Y~�^��c�p�Z]��<�*.�?�k��ƨ"᫓_F���m��u_��
W����|���M�{�hq܆�j��<p8F�g���2N��4x8��מ��Np]�C�DB#l��1ja\H`lA��T��l�D�"֜J��3�L���Ժ�T����W�Zv�-�wn@n_�r���G1�
~R韏"�C�R�k!C����)IjQ���:�n�@m9d槴�1 �����q�5&�;4�Oqk�೫c��]G�����P�/��BΥ�M5����͠�wF���Sۦ��?��6��Q�]�/Z�����OԢ��� ��:��\��R��2�K`�+_
3�r���)S��tH+��
i v�ߒ�~]���J6C��$j8��"�.�&��X����|�Z�I0�!�����1��$��=��z��G�+��^ǀK)6�=w,��	��紒��\ߥ��>�q�`cF�tVS���Ӣ1�˾4�6�ʋI��X��:�.Q�U�E2ɷ&�R˥woK��;aAU*����`�%����ey) ��TE�����7�ZC'�\�)�T7��|�	�ӽ�#ж�b �s���#�U��s���ЧcR����E(�쑊J#r���e$,\#n%�o���Y"1�Dd7�v�6�ӓ�6�M��a��nř�[c�����?�BL<�j�i�4MR��E���
�A���7�R��e��k��f�8չ�)�~b�k��>��wo2��-H~�pXQ򍋥c�����1����_s�̮�^װ,@�D����q�j�H7�.¸an���1�u�7��[��>.���Lg~�t����n�'���l�B^uj��	KmU�zڝA'�0�4�������߭�~�D��;	g��23��!�=�Ư-������ƀiW����>Y�Sؼ�j���+vZO�� U�Z�ⶰ�K�A�.f	2;j�׹5U�l�!��- &Ň�����"�ҧ��4srBhj,.�������^�M����]M�M�6�R{8ﰄ���,����<���5�Vm���)�n��
��+7!��!HMMI����ꬵ	E��Q�`6"����u�ep
�7��Xp�A������t5p�5ulϐZ��n:�5ubR�'����Q�w]��K�����<#5r(��T�ߠ������ݶ��{�>{c/
|Ě�D1 3�h�Z�I�`0���sK[j�i�e��-��-(M�-B���O��,5�(97~¢6�0={rz����t!H8Xљ�7$<�o-��N����fWX�m̴�������k�U��8�v��#n�9�������I�7�wg����-{��-�"U�A4��,l]��Q�Ս�0�����p�F��zG��P�T�����bb�a*{d�e�X@�	��1)�|6Ҿڄv������7���c鏣+_p�=����F�}��A���W��yg�yp�	*���B�:�S&1���|*i�����k��ݜ�X�D���()U�4���b�ͯ{�XyƩ���vr�bYL�mO��g�,t�i�fM�(ak	,�Bw�q�S�]wƦ �3�picHə�^yc�K��뿰��. j®l�BMց������"��p@�֭wi�L�.L[۰�����/��k��Q߼��Ll���\^�z��b������nc�ѩc�r��;G+����"c�[�f�)wZ���;�oq�kt�Y���ᣯw�7$�_��ד�F��~v�v���m?;iWL�ʿ�y�(i�`��c�j�b>ch����O<{N��T5�޶��cs:��嫖�'�5�����S��w�k�ͅỚ�_���T��o�x)C��O��E"HN|U��N���? ���*��%�.ݖ܉�d	{�_SwE�)6�8����%?1����l6�_zI,�      u   ]  x��[�������&<�[��038��J82�:R��\��dJ ,�lQ�p�|��Z����_�s��g��f`|��a�[}�u�(W�Y<�����?ퟯ�^��JHq c+�F��U����B�
��Z�/���I����Y��"����#C��d���?�v8��g���+=iߝ��5�6��忂dc^����o����Iϲ���Z�Үm����ɰ-��q��V����V�A�/߽�_@�E�lx�Ӯc(��X�	+b��_GXsF�S��9��D��-��ȨW���Q��[�ҍ��eP�~΄�*��
����C�b�������uKQy��WW�s�%z��8�Lz�/�~���"E�ǳW9�ߘ�Ͽ�!�1��#%n$�C��L#m��';sV���:-Kz��U��>�qܟ��]:����ƸN.�-!��b�ʆ�gK���Ir�P�!���܁Ώ`�G;AV�dp��_� �a"R�u�Rn��tdԑA�Qb��)͘�og�l�*(Y3*��h�Y˭{	A��g�*H���,��3��֮�t�6Zw^�n	�FU���q��7T��y�
]eUp!+ϭz	A����Z��H��	ZBTG碔�͹�����f�JA����֞$�\��G���1"�u��)$E�����B־��ß��3X�4|�n��i��k��%/Z�fD*�ˋ��H$�!�U�{%6ڡ�0��Am���"��Ȥ�"�:R��,�͟��J��!z�[�U��c�t�11�AD��h�V*�����T��~�JU-9Iv��Drn��La`��"�s2��A��O!Z��J�}+�pe	�MUU��bB�K�(CmS���)��(2���$u�c�R�a6��4k6:��<�@�8�����5i?n�,+����=��Vr�Բҧ��4�+�Q*�K�]�Xjtud
zI��+4V����cR�!F��4��P$Lg#S�2�X-�L�+�T�=f_BD�`��(L��*����5H����V�sڵ�3���̤61r�����<q`��6}�+g9�ur�4�h(GV(+�5҉Wp[�Iſ�j�#&v�5��f�$G)q��~9���\�S@��I�7vJ��[�c&�!�|SOj|;Y\�(S���f��.+�䞉�*/F~�\j��-�Ȥ�� ����z����[<�FAjm��fҦs��f9!f����3��e�`��B�3B���}j2v���z��0%W�s�k�d�r��M2��X��C��(J��ں6v��k,G�A��a��\������P1�xSA@|����NQ��e�5hđ��'V�������zj���v��%����QvVSY��)b9d���;J����ڻ-Ӈ͊�F�oFl��eRaA�"˓�1��3�m��(M�`��~;�d���h-:_&\r�4�o����������7� �#����O�I�Bǩp��xؗ�2��g�!�q�Xi�8��`ؖU�pki%�fD�Y���������9R����M�_^�M��:�iU��?�l������C����m|���ک��{n0�C`�7TOki�='+�\�Ս�i{渝[�\__=i���3��|G�)��>^U�/!�x{3�$�4�����@����]��Z	��Ӓ���	FE�+�*S��1�O���S�1T�XB �o������S�	Z�����4�֛����i����J��Mk��F�,!cfE�i-�<�T�͍�f��q��`�)ܕOz�o�s/P��v%U�5�v�6p>�A��7�A�V�7�E�s��������`����FNUϪ��i��gD���k���9��{4WN�N.�N�,E�C�][��/lb�ft�AZ5Q2��w�o�;7$�Gf@�y�����.rO�߶��o�p�����&�' >����������jq�Kϓ�z�g\/�h���cS�pL�� ��ȵ���`+�z�#�b��I���l�M�ۢ�1"ZDkvo˚]��욗��M�ήS��IV�������w����ˮ�T�����TS@�51����VdM��i 3MJ��q1.�C#��b�]̇f�������,�&rgjU�qv�GA�)�"��!y������I�����n BÓ��e�PtH���ܺ��`y}����(�*P�'a��Ir��/�@��$�{_R�O��Դ	TrkJ5�������˝q2�6I=I��tt$1z�:���F��3-�$p��A�0>��9r'���RM)���\�,�$������2���l`&�q�*m���\�C�2��$���3���eG:Q�v*�$b�2w�>)�=�WYI�;R����|dB��s"Q�
��U-:5Ǜ<M�(c�3���^�Gd���n����*3<0 �źuF�Mߋ�O�� b��CҊ����ػ�����7�n#Chc��"J���W��9yQ_x<Ud:��[s �]�J�5����P��m�t��0��SԝP8��	T�.Ƙ'E��C'��z�;I��\q)�$^U!�����״	���?��A���Y��]��_PZ��(���)���YvN�iM/F�e��;Ei��b}�f���iि�_uR�j����+���]Pb�W���Oz����c�P�pdLCw.w�.qZ/>*�j����I����#W�%�R��O"1s�J���R��RP��d�Ӕ:����x�N�WR��Е���&�˔��B��?��v�v�/���z)=���|����f[�{���4�o!�<������J2���O�dd���4*�O���T3?��r����q��BFF`u�����wIOg�z�I�)|f}
&�Ժ�WfI��fPZ�~�a�o��7�4�ɲ>c) �jH7��Q�f����,�1��A��L�Ƞ$վ-��Zm��PZ�{�qtf�'�.B}fQ@V6t]��ѥq�^�D��:��eP��� 9�ՔjTR@i��:w�L�oAggY�@��u��nQ�h��g��\%V�_���|��Z�L'���������bZ���������L�"�O��Di��PE��aDec�AY��o�)ZՏj��\�ˠ�jyEsK�-�2(���ׯ�!{e=:��t})��){!0T�L��P_�( ��õUjhB��=�X#�R�,U�N�vZBDJ���RC7P��C���\��^�f]��L7Q�����0/��A�0v�F�CSm�L��;�0=\Y�j��{�6�2%�-qS�x9g�q�>�=�
�T����<P-�i|2(I�{.̘��/��cDX�in��AI�Y�������N���4i�ܦ'��o�R�����V'A��J�ݾ�Zk3O%־�MЍl�����wM������      w   �  x��U�n1}����(�^�l�%���E��(�D���lҤl�d��?��ؽ@נ�*ݵg�9sf�l��iAk��44�ʎ�Ĳ���sٿ�Cl�ieT�.'�.��qD����*ie�%i+�Zqa��(�����͓WQ��N}��=�� kĬ�����C�-`�������C��|+G�M��$�!;i��t��3���J�c���9"l*�
�
�/�ADD���`��}�%-j軼 �kP�����.���yc%�����rq��$��{�ǰS��ບ���dz��^��n��bҹ��v����v;��Ѫ�ھ0	���?�J�-���d`�0f6鎢B��fh.�K̹+<�M`������)gl?�1�>�=]�o�x��DT�y�?3t�q���۷r�^R���Nǧ�	�����I��A,	 �S�٩�*j`���l<��������#����J�x�k��/�L��W����k�yBB�����xj;i?''oE]&�=(��IN�Fn��E0n�l�(��c��hK�0K-��{�KQ~��)���pKn��%�#���Zݞ�KY�����t)4������ږ	����ɷ�L���|�	[��7�o1�8fR+{�K!��@��!i�\q+ى�A�_�^�3ob��~[k��"��      y   g  x��T�n�0]'_�=r�gb�[�8N�ĊO�����R��;Vh:��ig&��ĵ��XDIε��9�$��7�.`+�f�a`��K�"p��븏��q�p�q��6����y�DC��U^{j��2��[�t�z��I!���3�-�|O�=�+��GL��T��"�U<�G_ �e�'��^#�R\ܑ{�_g��/��%.���,�i�0��ZS%u�����.8��{ь1�����#L�J�MEo�Y�N�"�-=��"�x���i �$���w�aJ`��r�^��qڈ���Ms�3[Ry��VTǩ���YG��r�je��rY�rT�]�T|JS@)�b���-�< �����
�]v>b}�g�����k���p���I
�$�s�Ws���!����=��a܇�W,��L��9.#v��{'e�UT鶧&0G۾V��r��=��ҵ5qW*u�79�)�����K�͞�ˍlw����Y<,��u���nU\��٠P\h��R�6��RM�Ш�]��1�C�"���31������!�̟5���������ㆪ>���5�S�w�;3n�6�Q��-�R��*��'x[��      {     x���K�$5���S�E������v�H�8 �
,�#̠h���}#"���{�I�*�~����|������a�����w��<~{<��Q=�J 3H��� I��{�y���W_ܑ'$��������|��$W�ɑ{�+���}�,$0b4�H��&myI�I�9�FJ�{�9���a�@	BəQ+��5�i��K�Mr���>Z�><�FCI=�Pb��R=Cn���7�!����Ҋ�!W����4Z�*U��[��D�$�|���uD-����j�	4��Z���D��՘�'�C�����������h�N�� R�<�jO�����*��'�ð��0R�-B�n&��P��p��+�v-[
�zz"9L+h��#Y�&UQ���`�9k�]e�nJ����o/�O%��n�Րo��?�����#Џ���-��܉�M���i��� �x���%y�]����-/��ⰼB���"�)��D��%W�AB�85�5�������ȿ�=d�cZ]U+i�Z�s�#�ɟ�e�	�*9�W�I�}m\r��[�k3�*�DZ��[����+|_*'��G7�A�Oh�sE*��w���5�*9���_KB��ۑ�y@-3��5J�����&���&9���������]�K2o��Y�G��W_#�N���*�#]8^�����Br>��W��Ā$���Y7��w���t�b�B�%�&9�Q=Q������mh�fҬ������&�u����6ƈ/�9P�\h�(DO)�٥:���I��'�z!96��>�����l�<��8g�c܉�0S����&�zl=�gP�{Lo#Ʀ[x6s_J��
�c�µBb���Q��:Ak�#b+)�@�u���^%�i��c4gc�iPoP�H�#q�O�e+!��W�q^As�x(��3K�\,����Qr���o��z��T�M���F9��@�`����"����z���T����-�����i�K�ds���v2���^'�B�Ա7[bJ;����\��IY��S1�	2neͼJ���9�/���W      }   �  x��VKr�6]S��>��Β@���*G�'��ēq*��J%��I��-[�,�
�� P�I�T�4�n��ׯ_7����M��\�S����q?�����۪�����'��f|5ǫ�/���a8���)�/��������k~���v��Ѫ3Ҵ*j�y.�lG,�t�w�1Z�����b�F&='wDj)�g1�&���>;r��%�M�)7c��}C��&���FT��,ဓ.rt���g�J'���t��d�F�g%�5B?���n8�?��ˏ0�o�	���}c�7�=��� ��r�n�����ǃ��c�{��h8���;�}K���Hf��:I8.��Q�Bd�:�ʆ� �h<�$� �1�t�;`��O����`�4MDa���Ҏ�s��jx?�Ax7r>�E���3�% ~����p�u�s��V�:�°��#̀���A��$�8so�]��v�
�;ׅ��2�/sR�	�Wgƫ�J�mE�l�h"y��kۖx��Ro���M�>�� Ǯ#V9�*RG9ۃ��3�KQ���s�DV�'�s�[�HH\�S�*�v�EV N�}@T����5�s�s��a��86|i�oIy�r��`���O\tB��PF����k:M�F�v�"*(N|DqK�t����m�ekuK�:�9�fL�F�i� c9�׉n�٫ǔ�ky\�Q���^�EŅQ�!J�Vm:#N� 6My���閕3v]� '�rN��p�J�����{�'�fT�ֺ�`��&K2�Sv2;��p��X��L"����(��먹c� ���]��M�m���o��C=M����<�����b>�]d%�Jg+J��7aV�|��-������󺊲��jN,�`�T�f�*i��6	���"�<b=��*g��^ؖ�AYٙ25�;���41U���ER�i>��c{�LX��<5�j���:�}��,���[�&�ȼE�L&�B!���=�&�]�B����P�^HJ�7��oG���CO�#\h(Ut�x0�P�ǻ��@��������5^/M�_eF�eq(YO��]���{$����2��oc�ؠ
��\��5����猣�:(�*⵴�C�Q��&�D#-�֣�I:��������k�}�CD����ї�������E�}��W��Hh
��<	�y Q~���T><����`��R�&ȶ�
�.��|�4 <��'|�=L[�J�]�@rS��do������,�K��R��ܛ�[��~-q�.�΃{D*x9��Z��L�Arl�Š!��4�4�I�$�QF��y)Ş<�-kf�n��&�"�e6��2�otH=V�eV�2�.a�Vw�f��p���qzKc��8N<X�y�y!@����p�O�*��������4g�k�&�Y@J�"Na�3�S�5�qW �mlm�p�  �3(�m���C����Tj�j��.��M�o��d�/�ZӶ         $  x���KR�@��3��=`����,9��CH��L%����.�m�l�+��(�,2Er��������фrz��&����R������n���}�{B�;Ut�)��3+C5�f�XP�b��� ����'NRk��lp�{~j��(H����z�=/x%����.sc7B��jCW\�Jw,o`~��eB����r`��Jy�Њ?�DZ�`�H�ĩ*J�ug�k*Ǡ�B~M37��}����M��MKHJ�5w�[(����Sʆ�������$�íR/�`'�ȠW%�/ݙ
����*I? �t��7�sw<`�EC��"�mGܺN`���,LV��Y��-5�G΁f'���KEޖt�w���IHǊ~�\�E�,��p��l_�%M��� �b" B�!wnX�)�G�lmӅ��=/���qw
i��S��N�=3��2t#�#������SK7�k���ͷ��(��FB��	D{ĳT���&��n}7*�m�#z��>�V�ŋ"����B����ֳ�>/�g6;ȘJ��c��E~�Y����� ���A      �   �  x��XێG}f���13,�-y��D�S>�Kֻ	�׎c�^�I��(�000�p��ݿ�/�'��T�X�sQ"�Z�Kuթ�u�q�N����z��i�t�cӡ��NL��(}�cL��~E�����m����a����(�6�X�9M&z.��,�����0�=*�^qߵ�ҟc�GzTRz��!-J�\�é��!��н��(=&;
�PTj�E���j�4�Fl#�T8Y��;���fd�ᩈ�B��-�����C�N>;�
���g.�J�'�x��#^�(���zEÔ�Sr Ų��Li�%�d:"P�sr���� o8X2�>���r!SZ��P�h8B(�[A0V8���|ԄܴNv`�CƂ���3(e��s�6�r��0��\q��Ç6+_"sM3����
�wz�]xu'8kV���N�ܯ8�{V�ׂ��z�Ͽ����=�qˎ[W�����K�q퓲���#��_�QS=F����i�cΚ��'�h��������E�=�>��e�?&@dS*��XX��5Л�ؼf�u �`*}8c�ED-�B�Zi�F��5B�;s�f���\����vB�;񪥊�@$7u�4"#,��-%*�!8 �K2��'���A�[R�ɶ�<��P�B���ۢ2�	A�O�����@�|�|�`F:y�,��C���F����+�=��������4���_��_�G܏���H�6%/�06��ᬝY�k����b��GJ���[Ý��|�Kr7W��P�qgW��Q�s����Ag�����/��9�"A��\�V@w�ʜ0ѥ`���VЇ\�"��0]���t�yQ�  �$�b���d��AK�5���%T�O/M%�Xٲ/�v$0�z*�Jn)Y�//RE
ɷXpp�o���7J.;v 8�~ ݑ��p C��
!���]{�+���\�Y�_
� ��(�--�TA�ڈA1bܐ�Y���gF6���f/�q`�b�!���[�z�����㐤���)ٳ�e�r*���}�8�R�����;�֮m����zJ{	S�L�����( �SJq.��+�8E���Q�b^�ǅLFÒy~%��:�������sK��0g$���4�9�.��I�G����l��|&��`)�{�M�� �\(Z-P-����w��GRӇ`G\?��~��3�Z$C1�i���zcc�5e�R�C$R&�o*��+�";��,r[0��rN>�MGW'���@���t�^ ��ʇT����Ʋˉ���a��Q����s�7�����g=����@v����>6��}�C���ӵ�y�̭A�9�x.uu�������({u��v��{�į����z���Q�{�"���D�F@;���&EM�7(�+�hi�^��g�;�y,v�Xɘ؜|XӲ���F7�XKxx���3Y�W����m�M_�9�_Y��"m�Ҝ�y�ʏ꿴�|�o
x$O*����RT9щ3
	���e��S���ю
E�f�b&���c	� N�����M���Ǫ�c7p�`�
�����c�r��a�f�1��N���(���e�oPW2��Ra��V�ႝB�[B��4�-����Z	�=����	�:�̂_.�R`��w�(າ�lw�?�t��JL�Զ�B�L�xp�{���)����to��prȑfm�]�;ڱ�p��V��g���"���	�l���.r��kϭ�����mG�:���&���7��dBmj��W�"�������k�w�ޞī����G"���n��P~M`{x������v�;+���t��A:�͉��]��V3��M�R�3��h��n�Mu��n_?�����H���ך�AQY3��RN�s��K���X���&�^-��;<���YY���
FsZ(��]��k:�럑�=��ץ�TR��YN��S�]ԝ�E�w�^���Vk~���/��ʁw�e�M}Z:::���#�      �   Z  x�řKn���U�轑�̈|�Y����G�4�C��o�2�H���+T��VK�nv�R�lvES�Ed�E5��\�^o��_׷���W�7��f}�o��/�g��x�Yݭo�����#~��x>���s�׏��j�~\\ov�\~������?�}�j
!kd2J-4S)[)RK��I�-*m"I,�*�ܓ��x����Lj�i�����%0���/:�����ޭ��E|]�OD�TqY�������f�]�1�8B!�r!�(�&5������
/vǠ���k�^mQ�ťk��Az����|�A�E�LB��"��Eᬜ���k����1�I��.�'��
���{ @���{F K^N�y�T�B���"�E�|�Z�1���� OMj6�L=�֟���P#����9�p�g�x�\?!�_OzjF�`��b�Hɨ$(�O��g�Ƽ�,Z�!�I��i*iGR��QO��*X�A�J"x�Le�V��i��R��z�ݙiv����<��D%'ᐚ��Σ���!��K�<�a���!ωi��XSGL*M��P���?y)����aݚ5v�i���(��Ls�wa�,��k
"�M��������b�jf���`g�Y�G-�#u�F���&:�X�"Y�1�%�mL�rQ<:�3Ӭ�������S�[ y�Ru>kJ�Y�r���F.d���S��w7�#�l��*Qx�;W�^��Hx�)���CM{��GUjз��#g%�$+IuB��E��[�1�a�
(�E�1�	��o`G2n�1{+��y��$)�D%i����&�d�ͣ#=5��q�ؗD��y�"2n���"UUJ,�dBѬ�,�P]����j4�o1| 0|�枩����g��<�m�����9|�����c�t�!��l����gi�DF���jf�0�eֶX;jf��w�Ѹsf�{��d$LɢQs��ek� E\��Q��J���l7t�Ԥgd�=d$L*HB6I�r��(�"8.B�J�jU�c �:��љ	@m�2&i<ِѭ�7�Э�M$\I� �#�e�K̺jЭ�Lz&� 	S�F�܇�P�c{��]G�)�a�bO@ՅQA��@�]F�Tdv��"�2�u�X+��Ѿ5���#j�K�9} �g&P���H�d�8����i."�MI������
V�5|PaqaTg�&����w�Ç-�7�k�K�O]46�^}��x�>�aҜZ���Pd��-�o1�����=F�q�oM �O�s(�R��R1�\K���0��F�a�L/��}QwLf&s���6��+mo��+�E��>WCڍ�����!Э	@��u�.1��Zk�P�Ѡ������pbĩ��͍8OM�t�9���s�E�,k���|4k�d�6�/����;��.��*�'E��MY��^<&&��3,;{9$od�YC�[�Ó�ɣ��8�
&X�}DWr�g	z9�WG�c�������{�df�Q��nS9*�e�n��3�0bc��O)I��0g�k�
]��	������{|��I����ߊp�Rۙ���ٿ}��Z5il����6�jƬQ]�ihV-k/�4�1�%��~�dg�Ϯ��U����K~U�@��J�]Ti&����l�+:Bp��	@��끓45�[c,�
"����V�H���p�B�wk�v�Ae:���L�L���XʆUE�Fd�{9��1���w=P�ֲ��/%��s������j��E�S3-�q�Է&P?ͮGj�/&���I�^]��"RD�&��M�*/����^͗����{�|�/�%Y�Tu�V��(��M)�\�#ɦ1����sj�t�"�� ӵ�+�R� {�ٗ�F��'q@3��9;��S��9�G�h*�J�:`��i���_+o}�zx�f���v�S������ ����2��\��Ա�S�B���F"�>����O�P�OM�T���Wω�,t;t ��!��i��y�Wn�vvk=�z���)P���_�L@8-V�
�*=�gx�?�04�NM��Q/:_5�ԟuW� �.ᑑ����VBH~�R얺~Tf�&���^�E����iψz�+>u��D�O��F�C�B���cr��y��b�I-      �   �   x�}���0��s=E猪�⴩ga/�@�33d$�@H������t��z�!���V�>A��E�Yš�`��$�O"4h@�.��%J*��ѣ.�5h���.�%z�'�2��=[r�|��шy-�sf3�:�D[�0���ư@]�3�lD�Y      �   0  x��Y]k%�}�����.i����/�7c����$�%"�61�ǐ8���u�%k[�����S=#ݞ���b̮ґN��:U]=���a���~���X_�҃�V��7��xu,��o����@��Q�K{$�w���r�\ز���ʁ�v���=�x�#U���K[��x@d7���6�QT�����#�7��lԙ�6�B\�q��a|=���:wA*�yɨ�C{�����t,����#������3l�؃5:� h�!h�H<2>(G�	qBld�@��DQ�/:�$�8A�X�YW"�y2>���|�S�Q?=�`9a6e5Կ�W����u�b__��x]ߎ��7^��_��u��Ft^��C��r�>EAu�:_${W$'$���6����� ��E�x���d��;�� G�tm$��A?8�'=	y�pF�G�,"N"��U�2gl��u1R��$�V��E����ꛣ��Ӽ��Ǥ���p �]�J�CiM{�MLzr�t%(�D�~HV���>�OG��!��}��џt2�����$&��8>�Y�s�sB�g��y���H��V�`��c�d��=�
������)��8�c
�!<�,�� /�^��w�Afk��C8|�F�߇��k�W�RiP>�V	Jn�D�S%��*�y�l��`�� N�b1��b�/��(	8���Vh��J�J*.N���ǈq��)$���ֺ�M�:���&��Cb�`�:u��NSoa��w�=���9g�NbD��؛o��t$��P;c�&.V����ᨶ=������d	a�*ũ��,��Y$��,ik�sq�6oJo�#��o�-{��M���E��r�Ǐ�ր�����2(hy��6l
��|�Q1����}0X Ǐ����E�W�a���w����x��\�7,b��`A7O�� ��s�da� d��z�<8A��絜s�G������b1���/�O`�۽mٙ��$e�J�[^�x�����g�_���B�6�
b�<&�W��~�����[o^#�˓hR���������ȍ��7��`�<D�N�x�o����Om�E������|K��>P��IQ9�rKO1fփ�����6�DX��5ƌ7ğ�im�0Ծ�_��TF��7\�p��R��qG弣x�bC��Tx�횾�ĵ��d �ӕ�u��'2S��f�bZ�,޽v�-�����"��2މNG�������7�=<nP���ղ=�p钆�bQ�� �?ᖹvXt�"e5E+��!�vΟw���B�`�Svq��9����Ap+�H�[@�� @�i=r��_6K�
�����K�A�f�ApP�����
bQ��upS:8~="e��|޹2W��=�6`�R��y�)�u�n�|���
b5�7;�!7�u�
b����Tx�I8��u���&����ܟ߁��������!�	�#��וX�q�_�-kN\���	�Y@!�|�Y�J���ܚ5��:J{�9cϙ_ p�\:�8m�)	�g1k�X)+�-�l.��+N�b�J/ f͍��uk�*�0ͥ�^ �{�,�1i�Hc���piݦR|�šHRR{��t�I%~�B٘R�:Ya�- &�)LeΛ
��u2'{�0'���ꜥ�W��Y@��:V�󀩈��n^q.�Z�C^3�CO���3�'�YC�J�������'���P/ f��*�������2o����Ih1e�(#��y�;�+J
RC������O�=d��1k�Xɪ�@��U�.I�i�5�����iCۻa��z(�]D#a;i�	+�D��7�ӳ��
��'*��HT�h#������~�*���!c��b1�S�q1[�;Br�#�s�E윮�CW���IR�{���1�g�ʬ���~�b����!���0��G��� y���}�fYk��/K>�z���dT�*d�
�r$�:A�Jf2*OQ�*�e8ZIU1����\�JTHo1R{��h6j;�������eY'���l���ё.2�=�L~�i;q���>�P�C���+�6��\V��P4���z�����ؖ6/���CR3���٩��IHX9�ץH����,w���_t�������n�?�u�9      �   �  x����J�@�ם��5�d2�ۺ7�m�oR��"
]�JD�uZ{��p���5iA�Ő9��|�p��-�!M�(7c3��nF�̌iA��a^Y�E�TВ���W
qFǡ+��f�<�8s��K3.�j��ٮ�ĤT 8k5rd��+e�hs�͇�/�RG�����cA/&�N;����z1���!����$]&�Yܣ���k���	#X���	hTԖMw�Z��1tZg��';�5�T�oa@o&�9jw
IL�@���P�]��$C��D&���-����X�v�{���qz���nZ�	�UOz�|��'p| �
^����o౜GH����i�ۧ`5Ie��ȉ�`��&����U��[���*U�o([6�&�����      �   t   x�3�̮*)ΈOL����T1JT10Wq-��L�/,,�q�7(�(.rN�H�w�,Nru�+��ɫ�JOL��4�K�	��ws�4202�54�50R04�2��26�3��60�-����� R�"�      �   U   x�}�1�  ����ݔ��B�-.�q#�?����[��Y��/�X�VQ;����{�-����1}�7��Z�|6�I~
N /��     