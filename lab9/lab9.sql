PGDMP                       |            ProductQuality    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    33872    ProductQuality    DATABASE     �   CREATE DATABASE "ProductQuality" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1251';
     DROP DATABASE "ProductQuality";
                postgres    false            �            1259    33881 	   Employees    TABLE     �  CREATE TABLE public."Employees" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    experience integer NOT NULL,
    bio text NOT NULL,
    image character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    "position" character varying(255) NOT NULL,
    department character varying(255) NOT NULL,
    "groupId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Employees";
       public         heap    postgres    false            �            1259    33880    Employees_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Employees_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Employees_id_seq";
       public          postgres    false    218            �           0    0    Employees_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Employees_id_seq" OWNED BY public."Employees".id;
          public          postgres    false    217            �            1259    33874    Groups    TABLE     �   CREATE TABLE public."Groups" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Groups";
       public         heap    postgres    false            �            1259    33873    Groups_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Groups_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Groups_id_seq";
       public          postgres    false    216            �           0    0    Groups_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Groups_id_seq" OWNED BY public."Groups".id;
          public          postgres    false    215            �            1259    33895    Products    TABLE     �  CREATE TABLE public."Products" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(255) NOT NULL,
    weight character varying(255) NOT NULL,
    description text NOT NULL,
    quality character varying(255) NOT NULL,
    price double precision NOT NULL,
    image character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Products";
       public         heap    postgres    false            �            1259    33894    Products_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Products_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Products_id_seq";
       public          postgres    false    220            �           0    0    Products_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Products_id_seq" OWNED BY public."Products".id;
          public          postgres    false    219            %           2604    33884    Employees id    DEFAULT     p   ALTER TABLE ONLY public."Employees" ALTER COLUMN id SET DEFAULT nextval('public."Employees_id_seq"'::regclass);
 =   ALTER TABLE public."Employees" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            $           2604    33877 	   Groups id    DEFAULT     j   ALTER TABLE ONLY public."Groups" ALTER COLUMN id SET DEFAULT nextval('public."Groups_id_seq"'::regclass);
 :   ALTER TABLE public."Groups" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            &           2604    33898    Products id    DEFAULT     n   ALTER TABLE ONLY public."Products" ALTER COLUMN id SET DEFAULT nextval('public."Products_id_seq"'::regclass);
 <   ALTER TABLE public."Products" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            �          0    33881 	   Employees 
   TABLE DATA           �   COPY public."Employees" (id, name, experience, bio, image, email, "position", department, "groupId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   �       �          0    33874    Groups 
   TABLE DATA           F   COPY public."Groups" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   7"       �          0    33895    Products 
   TABLE DATA           z   COPY public."Products" (id, name, type, weight, description, quality, price, image, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   �"       �           0    0    Employees_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Employees_id_seq"', 7, true);
          public          postgres    false    217            �           0    0    Groups_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Groups_id_seq"', 4, true);
          public          postgres    false    215            �           0    0    Products_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Products_id_seq"', 3, true);
          public          postgres    false    219            *           2606    33888    Employees Employees_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Employees"
    ADD CONSTRAINT "Employees_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Employees" DROP CONSTRAINT "Employees_pkey";
       public            postgres    false    218            (           2606    33879    Groups Groups_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Groups"
    ADD CONSTRAINT "Groups_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Groups" DROP CONSTRAINT "Groups_pkey";
       public            postgres    false    216            ,           2606    33902    Products Products_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Products" DROP CONSTRAINT "Products_pkey";
       public            postgres    false    220            -           2606    33889     Employees Employees_groupId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Employees"
    ADD CONSTRAINT "Employees_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES public."Groups"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public."Employees" DROP CONSTRAINT "Employees_groupId_fkey";
       public          postgres    false    4648    218    216            �   �  x����n�6������o�ԁ:��6�d�M��F�ۢ�AKckl�TIj���;��Arc�<H����5���Ԛ_`)�3Z���[^��X��sՂ��K��|o���CW�^sh�A�j�;w�خ���p�����j�M��HQD�k@P�:/jP��'���w�1fK�E�t�L�UZ���b	�V/�`�h/*�`[�P-b���̋$
6ݚmH]P�����I��Y�������^�~(,���d*�X�)��s9>�� K�$�%JNn�%�Vi��e�Y��?�+�Nu�+�M��{�%V��5�}�N��6ط�0-�Ft֬�9�J�b3PY���8�3�S��J� `O�A��D|x��x9��$�
ܠ�ʙ5U_z~��Z���� �좁=��f9�Ի���d��q�ᠱ%�?�Z��c�[�4��u��O��/+h�!I	#�Y��a��I->-d�ey�e���������rk��/�ӗ�/6˧���6�񁅢��1�74.�W|^R�=:�jZ�� ��+��#�h�N��}�����t�4�ӂ��y�W��l���]�����<����C�h��Xoz�Vyb..&���L�Q"X`�1X9��r����-~��e�]Trv�e��
߰�"�8O�j`Jn�����n0H��'��@�^�i�BP�L�= 9 �*̢b2ɲ���:�n���S^����K�J@~u�<�{�G�i4�Ne4*���>��ݘ����{$f�,~X_~�o������+U��4
��)k���A��7_���U3X���T�Wp��%8v�i��Qz�絅��j��z�P���������t���f�����,�(9��'��2��Oia�V��8�+�e���I�E�œ(�����O:FG�6p�����8�����T~[      �   I   x�3�t/�/-Pp�4202�50�54Q04�22"=CcKmc��\FPS�(2�j�3E��@Mq�Ȕ=... ��9=      �   0  x��WKSG>�_1Ǥ"�}聸r� �\��2N٘�*7=��%۔��*�I�Z�V�]�����of�\6U��LO��_�kg�r,}9R����ށ�_d,TS��rO]�PF2�-K�d-�0R]9�>��'�3V����TW�d,����cK�e���	�e_u�P�!ˡ��U���[�~t��5���2]6��d%P���od�.� �1�'ꝼ�-�v�db,��ԯE��:
F��74锯�����.iqX!]pCK�9�ɕ���U�b�T{s��W��6��O��B�N���($'�@���Hgl� �7����{��&}���եP��虶�ň� �k_��;۪�ђ�sDK �a &����`�@��I��	�x�3Hn��g	=�P��|�������([h�i-�F�%���(3��>m�d~�dZ��>Y�M\C�����b��� (>�˱[8�c�"�`=�d�9�D���=�"��䥍���4P� ��TD�%��#�<���U8�p���E�@o�0�|�d��`� ����kR���0�9�Su)�3� ��?�>�.Lxw��Gx���:�1%��q�c�d��"w9��`�șvR�|,��S
`�t�`/�Չh��B�0�4���t'� �?Ո���^ ���i�Y�(V�&�K&x��r7���$�(s�LJ֧1�u������CWu\��+�����4��%���L�
��Ej0A�|$���k� @l�jR}��"�CCL��~�n��Rƶ2��Ǉ�������ܫ����o��������~����3o�Z���N���
�|�T*����4���
�+6��z�Q�x��/��2��6-{�.��v��V)�Vܒ]��r���df�a�2m�߈[/#Զ���Ϗ��O�.�ݓC��ǣ��ca[r�I;��L;��Ok�}�\����iR(�ZM�t�%�N;��!����0MO��Œ�Zcy�^}[sN�]eV�CS��="�	�Z�C�+\l^�i�x�����/# Chi���O ���?~íd��q��� �}V��B��X��Az@�I+�VBIf��]�y��Lrk:5��/�#P� �&XUtSd���;�s#�ѡ���>#�Za �&�_�8@��4.��4�2�97}j��hz���E�+���qI�7�a�1*<�fi�#�ʨ�nzsKʑ)�-��U�7^�\kؕr�u�^ɭZE�^����m׷�jͳr�OO7C#��h ����[~�����Ոt@s�g>a�d�)c�,�Ҕ��RsMy�+M�_gt0�\��4��%��������|c�.��z��JD48C�c���U�/��r $3��Pm�U����<��E���	3�p<z�l�?¥H�7�y�E�/�0D�x��r�'d�2��s�6�IR{-�N���b@{�Ҽsf�%o0O��1_�-\��HW�֫m���G3�'/'c�cW��A����d�;�"����l�R ���&�	�l-�ʋ�YX3���5cۏ�*۱�[�����6U���g��J�u���R�P+���缟s�#�67     